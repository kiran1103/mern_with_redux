import * as actionsTypes from './actionTypes';

export const addToCart = (product) => {
	return {
		type: actionsTypes.ADD_CART,
		payload: product,
	};
};

export const removefromCart = (id) => {
	return {
		type: actionsTypes.REMOVE_CART,
		payload: id,
	};
};
