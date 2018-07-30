import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { addProductToCart, removeProduct } from '../store'

class SingleProduct extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			quantity: 0
		}
	}

	handleChange = event => {
		this.setState({quantity: event.target.value})
	}

	handleSubmit = event => {
		event.preventDefault()
		this.props.addToCart({
			id: this.props.product.id,
			quantity: this.state.quantity
		})
	}

	render() {
		const { user, product, removeProduct } = this.props
		const productId = +this.props.match.params.productId

		return (
			<div>
				{product ? (
					<div>
						<form onSubmit={this.handleSubmit}>
							<label>{product.title}</label>
							<img src={product.photo} />
							<p>{product.description}</p>
							<select
								name="quantity"
								onChange={this.handleChange}
							>
								<option value="0">--</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</select>
							<button type="submit">Add to Cart</button>
						</form>
						{user.admin && (
							<div>
								<Link to={`/products/${product.id}/edit`}>
									<button type="button">Edit Product</button>
								</Link>
								<button type='button' onClick={() => removeProduct(productId)}>Delete Product</button>
							</div>
						)}
					</div>
				) : (
					<div>
						<p>Product does not exist!</p>
					</div>
				)}
			</div>
		)
	}
}

const mapStateToProps = function(state, ownProps) {
	const productId = +ownProps.match.params.productId
	const products = state.products.products

	if (products) {
		const product = products.find(product => product.id === productId)
		return {
			product,
			user: state.user,
			cart: state.cart
		}
	} else {
		return {cart: state.cart}
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		addToCart: product => dispatch(addProductToCart(product)),
		removeProduct: productId => dispatch(removeProduct(productId, ownProps.history))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
