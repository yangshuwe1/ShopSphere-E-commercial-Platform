const express = require('express');
const { body, validationResult } = require('express-validator');
const Product = require('../models/Product');
const { requireAuth, requireRole, isOwnerOrRole } = require('../middleware/auth');

const router = express.Router();

// Public list with basic pagination
router.get('/', async (req, res) => {
	const page = Math.max(parseInt(req.query.page || '1', 10), 1);
	const pageSize = Math.min(Math.max(parseInt(req.query.pageSize || '12', 10), 1), 100);

	// Build filter
	const filter = { isActive: true };
	if (req.query.q) {
		filter.title = new RegExp(String(req.query.q), 'i');
	}
	const minPrice = req.query.minPrice ? Number(req.query.minPrice) : undefined;
	const maxPrice = req.query.maxPrice ? Number(req.query.maxPrice) : undefined;
	if (Number.isFinite(minPrice) || Number.isFinite(maxPrice)) {
		filter.price = {};
		if (Number.isFinite(minPrice)) filter.price.$gte = minPrice;
		if (Number.isFinite(maxPrice)) filter.price.$lte = maxPrice;
	}

	// category & brand filters (support CSV or repeated params)
	if (req.query.category) {
		const raw = Array.isArray(req.query.category) ? req.query.category : String(req.query.category).split(',');
		const cats = raw.map(s=>String(s).trim()).filter(Boolean);
		if (cats.length === 1) filter.category = cats[0]; else if (cats.length > 1) filter.category = { $in: cats };
	}
	if (req.query.brand) {
		const raw = Array.isArray(req.query.brand) ? req.query.brand : String(req.query.brand).split(',');
		const brs = raw.map(s=>String(s).trim()).filter(Boolean);
		if (brs.length === 1) filter.brand = brs[0]; else if (brs.length > 1) filter.brand = { $in: brs };
	}

	// Sorting
	let sort = { createdAt: -1 };
	const sortParam = String(req.query.sort || '').toLowerCase();
	if (sortParam === 'price_asc') sort = { price: 1, _id: 1 };
	else if (sortParam === 'price_desc') sort = { price: -1, _id: -1 };
	else if (sortParam === 'newest') sort = { createdAt: -1, _id: -1 };

	const [items, total, featured, facets] = await Promise.all([
		Product.find(filter).sort(sort).skip((page - 1) * pageSize).limit(pageSize),
		Product.countDocuments(filter),
		Product.find({ ...filter, featured: true }).sort({ createdAt: -1 }).limit(12),
		// basic facet counts for categories and brands
		Product.aggregate([
			{ $match: { isActive: true } },
			{ $group: { _id: null, categories: { $addToSet: "$category" }, brands: { $addToSet: "$brand" } } },
			{ $project: { _id: 0, categories: 1, brands: 1 } }
		])
	]);
	const totalPages = Math.max(1, Math.ceil(total / pageSize));
	const facet = facets && facets[0] ? facets[0] : { categories: [], brands: [] };
	return res.json({ items, page, pageSize, total, totalPages, featured, facet });
});

// Public detail
router.get('/:id', async (req, res) => {
	const item = await Product.findById(req.params.id);
	if (!item || !item.isActive) return res.status(404).json({ message: 'Not found' });
	return res.json(item);
});

// Create (seller/admin)
router.post('/',
	requireAuth,
	requireRole('seller', 'admin'),
	body('title').isLength({ min: 1 }),
	body('description').isLength({ min: 1 }),
	body('price').isFloat({ min: 0 }),
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
		const payload = {
			owner: req.user.sub,
			title: req.body.title,
			description: req.body.description,
			price: req.body.price,
			images: req.body.images || [],
			stock: req.body.stock || 0,
			featured: !!req.body.featured,
			category: req.body.category,
			brand: req.body.brand
		};
		const created = await Product.create(payload);
		return res.status(201).json(created);
	}
);

// Update (owner/admin)
router.put('/:id',
	requireAuth,
	isOwnerOrRole(async (req) => {
		const product = await Product.findById(req.params.id);
		return product?.owner;
	}),
	async (req, res) => {
		const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!updated) return res.status(404).json({ message: 'Not found' });
		return res.json(updated);
	}
);

// Delete (owner/admin)
router.delete('/:id',
	requireAuth,
	isOwnerOrRole(async (req) => {
		const product = await Product.findById(req.params.id);
		return product?.owner;
	}),
	async (req, res) => {
		await Product.findByIdAndDelete(req.params.id);
		return res.json({ ok: true });
	}
);

module.exports = router;


