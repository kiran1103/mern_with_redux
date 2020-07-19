const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const productRoutes = require('./routes/api/product');
const config = require('./config');

const app = express();

app.use(bodyParser.json());

app.use('/api/products', productRoutes);

const PORT = 5000 || process.env.PORT;

app.use('', (req, res, next) => {
	res.json({
		message: 'Invalid route',
	});
});

mongoose
	.connect(config.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('Connected to DB');
		app.listen(PORT, console.log(`Server listening at port ${PORT}`));
	})
	.catch((err) => {
		console.log('Failed to connect to DB');
	});
