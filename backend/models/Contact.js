const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	phone: { type: String },
	country: { type: String },
	subject: { type: String, required: true },
	message: { type: String, required: true },
	status: { type: String, enum: ['new', 'resolved'], default: 'new' }
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);


