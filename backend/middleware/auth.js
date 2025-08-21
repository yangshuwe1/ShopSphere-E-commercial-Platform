const jwt = require('jsonwebtoken');

const COOKIE_NAME = process.env.COOKIE_NAME || 'auth_token';

function authMiddleware(req, _res, next) {
	const token = req.cookies?.[COOKIE_NAME];
	if (!token) return next();
	try {
		req.user = jwt.verify(token, process.env.JWT_SECRET);
	} catch (_e) {
		// ignore invalid token
	}
	next();
}

function requireAuth(req, res, next) {
	if (!req.user) return res.status(401).json({ message: 'Unauthenticated' });
	next();
}

function requireRole(...roles) {
	return (req, res, next) => {
		if (!req.user || !roles.includes(req.user.role)) {
			return res.status(403).json({ message: 'Forbidden' });
		}
		next();
	};
}

function isOwnerOrRole(getOwnerId) {
	return async (req, res, next) => {
		try {
			if (!req.user) return res.status(401).json({ message: 'Unauthenticated' });
			const ownerId = await getOwnerId(req);
			if (String(ownerId) === String(req.user.sub) || req.user.role === 'admin') {
				return next();
			}
			return res.status(403).json({ message: 'Forbidden' });
		} catch (e) {
			return res.status(500).json({ message: 'Authorization check failed' });
		}
	};
}

module.exports = { authMiddleware, requireAuth, requireRole, isOwnerOrRole };


