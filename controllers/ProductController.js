const { validationResult } = require('express-validator');

const Product = require('./../model/Product');

exports.getProducts = async (req, res, next) => {
	try {
		const products = await Product.find({});

		res.json({
			status: 'ok',
			data: products,
		});
	} catch (error) {
		res.json({
			status: 'error',
			message: error.message,
		});
	}
};

exports.addProduct = async (req, res, next) => {
	const { name, description, amount, stock } = req.body;

	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}

	try {
		const product = new Product({
			name,
			description,
			amount,
			stock,
		});

		await product.save();

		res.json({
			status: 'ok',
			data: 'Product added successfully',
		});
	} catch (error) {
		res.json({
			status: 'error',
			message: error.message,
		});
	}
};

exports.deleteProduct = async (req, res, next) => {
	let id = req.params.id;

	try {
		let result = await Product.findByIdAndRemove(id);
		if (result) {
			res.json({
				status: 'ok',
				message: 'Product deleted successfully',
			});
		} else {
			res.json({
				status: 'error',
				message: 'Error deleteing the product',
			});
		}
	} catch (error) {
		res.json({
			status: 'error',
			message: error.message,
		});
	}
};

exports.updateProduct = async (req, res, next) => {
	const { name, amount, description, stock } = req.body;
	const productId = req.params.id;

	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}

	try {
		let product = await Product.findById(productId);
		product.name = name;
		product.amount = amount;
		product.description = description;
		product.stock = stock;
		await product.save();
		res.json({
			status: 'ok',
			message: 'Product updated successfully',
		});
	} catch (error) {
		res.json({
			status: 'error',
			message: error.message,
		});
	}
};
