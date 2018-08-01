import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import AddtoCartToast from './AddtoCartToast'
import {addProductToCart, removeProduct, addToast, removeToast} from '../store'
import axios from 'axios'

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
		this.props.addToast({
			text: `You've added ${this.state.quantity} ${
				this.props.product.title
			} to your cart`
		})
		setTimeout(this.props.removeToast, 1500)
	}

	async componentDidUpdate(prevProps) {
		if (this.props.cart.items !== prevProps.cart.items)
			// save updated cart state to session
			await axios.post('/api/session/', {
				cart: {items: this.props.cart.items}
			})
	}

	render() {
		const {user, product, removeProduct} = this.props
		const productId = +this.props.match.params.productId

		return (
			<div>
				{product ? (
					<div>
						<form onSubmit={this.handleSubmit}>
							<label>
								<h5 className="text-center">{product.title}</h5>
							</label>
							<p className="font-weight-light text-left">{`$${Number(
								product.price / 100
							).toFixed(2)}`}</p>
							<img src={product.photo} height={450} width={450}/>
							<p>{product.description}</p>
							<select
								class="btn btn-light dropdown-toggle"
								name="quantity"
								onChange={this.handleChange}
							>
								<option value="0">Quantity</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</select>
							<button type="submit" className="btn btn-success">
								Add to Cart
							</button>
							<a href="/products">
									<button
										type="button"
										className="btn btn-primary"
									>
										Continue Shopping
									</button>
								</a>
						</form>
						<div>
							{this.props.toast.text ? <AddtoCartToast /> : null}
						</div>
						{user.admin && (
							<div>
								<Link to={`/products/${product.id}/edit`}>
									<button
										type="button"
										className="btn btn-light"
									>
										Edit Product
									</button>
								</Link>
								<button
									type="button"
									className="btn btn-danger"
									onClick={() => removeProduct(productId)}
								>
									Delete Product
								</button>
								<a href="/products">
									<button
										type="button"
										className="btn btn-primary"
									>
										Continue Shopping
									</button>
								</a>
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
	const productId = ownProps.match.params.productId
	const products = state.products.products
	const toast = state.toasts.cartToast

	if (products) {
		const product = products.find(product => product.id == productId)
		return {
			product,
			user: state.user,
			cart: state.cart,
			toast
		}
	} else {
		return {
			cart: state.cart,
			toast
		}
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		addToCart: product => dispatch(addProductToCart(product)),
		removeProduct: productId =>
			dispatch(removeProduct(productId, ownProps.history)),
		addToast: toast => dispatch(addToast(toast)),
		removeToast: () => dispatch(removeToast())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SingleProduct)
