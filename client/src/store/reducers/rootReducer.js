import { combineReducers } from 'redux';
import { shoppingReducer } from './shopping';

export default combineReducers({
	shop: shoppingReducer,
});
