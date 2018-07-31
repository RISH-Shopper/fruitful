import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import AddtoCartToast from './AddtoCartToast'
import { addProductToCart, removeProduct, addToast} from '../store'
import axios from 'axios';

//import thunks from store once created

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
    this.props.addToast({text: `You've added ${this.state.quantity} ${this.props.product.title} to your cart`})

  }

  async componentDidUpdate(prevProps){
    if(this.props.cart.items !== prevProps.cart.items)
    console.log('updated',this.props.cart)
    // save updated cart state to session
    await axios.post('/api/session/', {cart: {items: this.props.cart.items}})
  }

	render() {
		const { product, removeProduct } = this.props
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
              {
                (this.props.toast.text) ? <AddtoCartToast /> : null
              }
						<div>
							<Link to={`/products/${product.id}/edit`}>
								<button type="button">Edit Product</button>
							</Link>
							<button type='button' onClick={() => removeProduct(productId)}>Delete Product</button>
						</div>
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
		return {product, cart: state.cart, toast}
	} else {
		return {cart: state.cart, toast}
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		addToCart: product => dispatch(addProductToCart(product)),
    removeProduct: productId => dispatch(removeProduct(productId, ownProps.history)),
    addToast: toast => (dispatch(addToast(toast)))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
