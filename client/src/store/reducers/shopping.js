import * as actionTypes from './../actions/actionTypes';

let initialState = {
	products: [
		{ id: 1, name: 'Eggs' },
		{ id: 2, name: 'Breads' },
		{ id: 3, name: 'Milk' },
		{ id: 4, name: 'Candy' },
	],
	cart: [],
};

export const shoppingReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_CART: {
			let cart = [...state.cart];
			let productIndex = cart.findIndex(
				(cart) => cart.id == action.payload.id
			);
			console.log('index', productIndex);
			if (productIndex != -1) {
				cart[productIndex] = {
					...cart[productIndex],
					qty: cart[productIndex].qty + 1,
				};
			} else {
				cart.push({ ...action.payload, qty: 1 });
			}

			return { ...state, cart };
		}
		case actionTypes.REMOVE_CART: {
			let cart = [...state.cart];
			cart = cart.filter((c) => c.id !== action.payload);
			return { ...state, cart };
		}
		default:
			return state;
	}
};
