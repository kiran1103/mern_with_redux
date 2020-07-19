const mongoose = require('mongoose');

const productSchema = mongoose.Schema;

const product = new productSchema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	amount: {
		type: Number,
		required: true,
	},
	stock: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model('Product', product);
