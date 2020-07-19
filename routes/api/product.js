const express = require('express');
const { body, check } = require('express-validator');

const ProductController = require('./../../controllers/ProductController');

const router = express.Router();

// GET api/products
router.get('/', ProductController.getProducts);

// POST api/products
router.post(
	'/',
	[
		body('name').notEmpty(),
		body('amount').isNumeric(),
		body('description').isLength(5),
		body('stock').isNumeric(),
	],
	ProductController.addProduct
);

// DELETE api/products/:id
router.delete(
	'/:id',
	[check('id').notEmpty()],
	ProductController.deleteProduct
);

// PUT api/proucts/:id
router.put(
	'/:id',
	[
		body('name').notEmpty(),
		body('amount').isNumeric(),
		body('description').isLength(5),
		body('stock').isNumeric(),
	],
	ProductController.updateProduct
);

module.exports = router;
