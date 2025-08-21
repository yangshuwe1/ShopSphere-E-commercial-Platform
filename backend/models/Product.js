const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	title: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true, min: 0 },
	images: [{ type: String }],
	stock: { type: Number, default: 0 },
	isActive: { type: Boolean, default: true },
	featured: { type: Boolean, default: false },
	category: { type: String, index: true },
	brand: { type: String, index: true },
	rating: { type: Number, default: 0, min: 0, max: 5 },
	reviewsCount: { type: Number, default: 0, min: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);


