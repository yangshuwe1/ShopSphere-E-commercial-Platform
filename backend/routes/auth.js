const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');

const router = express.Router();
const COOKIE_NAME = process.env.COOKIE_NAME || 'auth_token';

function signJwt(payload) {
	return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });
}

router.post('/register',
	body('email').isEmail(),
	body('password').isLength({ min: 6 }),
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

		const { email, password, name } = req.body;
		const exists = await User.findOne({ email });
		if (exists) return res.status(409).json({ message: 'Email already registered' });
		const passwordHash = await bcrypt.hash(password, 10);
		const user = await User.create({ email, passwordHash, name });
		return res.status(201).json({ id: user._id, email: user.email });
	}
);

router.post('/login',
	body('email').isEmail(),
	body('password').exists(),
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (!user) return res.status(401).json({ message: 'Invalid credentials' });
		const ok = await bcrypt.compare(password, user.passwordHash);
		if (!ok) return res.status(401).json({ message: 'Invalid credentials' });

		const token = signJwt({ sub: user._id, role: user.role, email: user.email });
		res.cookie(COOKIE_NAME, token, {
			httpOnly: true,
			sameSite: 'lax',
			secure: process.env.NODE_ENV === 'production',
			maxAge: 7 * 24 * 3600 * 1000
		});
		return res.json({ id: user._id, email: user.email, role: user.role });
	}
);

router.post('/logout', (req, res) => {
	res.clearCookie(COOKIE_NAME);
	return res.json({ ok: true });
});

router.get('/me', (req, res) => {
	const token = req.cookies?.[COOKIE_NAME];
	if (!token) return res.status(401).json({ message: 'Unauthenticated' });
	try {
		const payload = jwt.verify(token, process.env.JWT_SECRET);
		return res.json(payload);
	} catch (e) {
		return res.status(401).json({ message: 'Unauthenticated' });
	}
});

// elevate role (admin only) or allow self-upgrade for demo via token email match (optional)
router.post('/role', async (req, res) => {
  const token = req.cookies?.[COOKIE_NAME];
  if (!token) return res.status(401).json({ message: 'Unauthenticated' });
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const bodyEmail = req.body?.email;
    const desiredRole = req.body?.role;
    if (!desiredRole) return res.status(400).json({ message: 'role is required' });
    if (!['customer', 'seller', 'admin'].includes(desiredRole)) return res.status(400).json({ message: 'Invalid role' });

    // Default to self email if not provided
    const targetEmail = bodyEmail || payload.email;
    if (!targetEmail) return res.status(400).json({ message: 'email is required' });

    // Demo rule: self can only upgrade to 'seller' or downgrade to 'customer'. Only admin can set 'admin' or change others.
    const isSelf = payload.email === targetEmail;
    if (!isSelf && payload.role !== 'admin') return res.status(403).json({ message: 'Forbidden' });
    if (isSelf && desiredRole === 'admin') return res.status(403).json({ message: 'Forbidden' });

    const user = await User.findOneAndUpdate({ email: targetEmail }, { role: desiredRole }, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });

    // If the user updated is the current session user, refresh JWT cookie with new role
    if (user.email === payload.email) {
      const token = jwt.sign({ sub: user._id, role: user.role, email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
      res.cookie(COOKIE_NAME, token, {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 7 * 24 * 3600 * 1000
      });
    }
    return res.json({ email: user.email, role: user.role });
  } catch (e) {
    return res.status(401).json({ message: 'Unauthenticated' });
  }
});

module.exports = router;


