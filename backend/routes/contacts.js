const express = require('express');
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const { requireAuth, requireRole } = require('../middleware/auth');

const router = express.Router();

// Create contact (public)
router.post('/',
	body('name').isLength({ min: 1 }),
	body('email').isEmail(),
	body('subject').isLength({ min: 1 }),
	body('message').isLength({ min: 1 }),
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
		const { name, email, subject, message, phone, country } = req.body;
		const contact = await Contact.create({ name, email, subject, message, phone, country });
		return res.status(201).json(contact);
	}
);

// List contacts (admin only)
router.get('/', requireAuth, requireRole('admin'), async (_req, res) => {
	const items = await Contact.find().sort({ createdAt: -1 });
	return res.json(items);
});

// Update status (admin only)
router.patch('/:id', requireAuth, requireRole('admin'), async (req, res) => {
	const { id } = req.params;
	const { status } = req.body;
	const updated = await Contact.findByIdAndUpdate(id, { status }, { new: true });
	if (!updated) return res.status(404).json({ message: 'Not found' });
	return res.json(updated);
});

module.exports = router;


