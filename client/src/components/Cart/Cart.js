import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';

import { connect } from 'react-redux';
import { removefromCart } from './../../store/actions/shopActions';

function generate(element) {
	return [0, 1, 2].map((value) =>
		React.cloneElement(element, {
			key: value,
		})
	);
}

class Cart extends React.Component {
	state = {
		dense: false,
		secondary: false,
	};

	render() {
		return (
			<List dense={this.state.dense}>
				{this.props.cart.map((p) => {
					return (
						<ListItem
							key={p.id}
							onClick={() => this.props.removeCart(p.id)}
						>
							<ListItemAvatar>
								<Avatar>
									<FolderIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary={p.name} />
							<ListItemSecondaryAction>
								<IconButton edge="end" aria-label="delete">
									{p.qty}
								</IconButton>
							</ListItemSecondaryAction>
						</ListItem>
					);
				})}
			</List>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		cart: state.shop.cart,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeCart: (id) => dispatch(removefromCart(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
