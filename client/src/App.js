import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

function App(props) {
	return (
		<div className="App">
			<BrowserRouter>
				<Header {...props} />
				<Route path="/" exact component={Product}></Route>
				<Route path="/cart" component={Cart}></Route>
			</BrowserRouter>
		</div>
	);
}

export default App;
