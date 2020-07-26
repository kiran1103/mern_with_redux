import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { addToCart } from './../../store/actions/shopActions';

import { connect } from 'react-redux';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		margin: 15,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

const Product = ({ products, addProduct }) => {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	return products.map((pro) => {
		return (
			<Card className={classes.root} key={pro.id}>
				<CardContent>
					<Typography variant="h5" component="h2">
						{pro.name}
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						variant="contained"
						color="primary"
						className={classes.button}
						onClick={() => {
							addProduct(pro);
						}}
						startIcon={<ShoppingCartIcon />}
					>
						Add To Cart
					</Button>
				</CardActions>
			</Card>
		);
	});
};

const mapStateToProps = (state) => {
	return {
		products: state.shop.products,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addProduct: (product) => dispatch(addToCart(product)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
