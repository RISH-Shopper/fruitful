import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import addProductToCart from '../store'
//import thunks from store once created

class SingleProduct extends React.Component {
	handleChange = event => {
		this.setState({[event.target.name]: event.target.value})
	}

	handleSubmit = event => {
		event.preventDefault()
    this.props.addToCart(this.props.product)
	}

	render() {
    const {product, cart} = this.props
    console.log("PROPS:", this.props)

		return (
			<div>
				{product ?
					(
						<div>
							<form onSubmit={this.handleSubmit}>
								<label>{product.title}</label>
								<img src={product.photo} />
								<p>{product.description}</p>
								<select name="quantity" onChange={this.handleChange}>
									<option value="">--</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</select>
								<button type="submit">Add to Cart</button>
							</form>
							<div>
								<Link to={`/products/${product.id}/edit`}>
									<button type='button'>Edit Product</button>
								</Link>
							</div>
						</div>
					) : (
						<div>
							<p>Product does not exist!</p>
						</div>
					)
				}
			</div>
		)
	}
}

const mapStateToProps = function(state, ownProps) {
	const productId = ownProps.match.params.productId
	const products = state.products.products

	if (products) {
		const product = products.find(product => product.id == productId)
		return {product, cart: state.cart}
	} else {
		return {cart: state.cart}
	}
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => dispatch(addProductToCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
