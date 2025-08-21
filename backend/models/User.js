const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true, index: true },
	passwordHash: { type: String, required: true },
	name: { type: String },
	role: { type: String, enum: ['customer', 'seller', 'admin'], default: 'customer' }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);


