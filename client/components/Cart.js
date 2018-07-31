import React, {Component} from 'react'
import {connect} from 'react-redux'
import PromptCheckout from './PromptCheckout'
import { cartTotalPrice, formatter } from '../store/helper'
import { getCartFromSession,removeProductFromCart,incrementProductQuantity, decrementProductQuantity, createOrder } from '../store'

class Cart extends Component {
  componentDidMount() {
    this.props.setCartFromSession()
  }

  handleSubmit = evt => {
    evt.preventDefault()

    if (this.props.user.id) {
      this.props.createNewOrder({
        userId: this.props.user.id || '99',
        totalPrice: this.props.totalPrice
      })
      this.props.history.push('/checkout')
    } else {
      this.props.history.push('/prompt')
    }
  }

  removeProductFromCart = productId => {
    return () => this.props.deleteProductFromCart(productId)
  }

  incrementProductQuantity = productId => {
    return () => this.props.incrementProductInCart(productId)
  }

  decrementProductQuantity = productId => {
    return () => this.props.decrementProductInCart(productId)
  }

  renderProductItems = () => {
    return this.props.productList.map(this.renderProductItem)
  }

  renderProductItem = productItem => {
    return (
      <div key={productItem.product.id} className="product-item">
        <div>Name: {productItem.product.title}</div>
        <img src={productItem.product.photo} />
        <button onClick={this.removeProductFromCart(productItem.product.id)}>
          Remove Item
        </button>

        <div>
          Unit Price: {formatter.format(productItem.product.price / 100)}
        </div>
        <button
          onClick={this.incrementProductQuantity(productItem.product.id)}
          className="btn btn-secondary"
        >
          {' '}
          +{' '}
        </button>
        <div>quantity: {productItem.quantity}</div>
        <button className="btn btn-secondary" onClick={this.decrementProductQuantity(productItem.product.id)}> - </button>
      </div>
    )
  }

  render() {
    const { productList } = this.props
    const totalProductQuantity = productList.reduce(function(
      memo,
      productItem
    ) {
      return memo + productItem.quantity
    },
    0)

    const totalPrice = formatter.format(
      productList.reduce(function(memo, productItem) {
        return memo + productItem.quantity * productItem.product.price
      }, 0) / 100
    )

    return (
      <div className="cart">
        <h1>CART</h1>
        {this.renderProductItems()}
        <h3 className="total-number-items">
          Total number of items: {totalProductQuantity}
        </h3>
        <h3 className="total-cost">Total cost: {totalPrice}</h3>
        <button onClick={this.handleSubmit}>Checkout</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const items = state.cart.items
  const products = state.products.products
  const productList = []
  const order = state.cartOrder
  const user = state.user
  const totalPrice = cartTotalPrice(state) * 100

  for (var productId in items) {
    let product = products.find(product => product.id == productId)
    if (product) {
      productList.push({product, quantity: items[productId]})
    }
  }

  return {productList, order, user, totalPrice}
}

const mapDispatchToProps = dispatch => {
  return {
    createNewOrder: userIdandPrice => dispatch(createOrder(userIdandPrice)),
    setCartFromSession: cart => dispatch(getCartFromSession(cart)),
    deleteProductFromCart: productId => {
      const action = removeProductFromCart(productId)
      return dispatch(action)
    },
    incrementProductInCart: productId => {
      const action = incrementProductQuantity(productId)
      return dispatch(action)
    },
    decrementProductInCart: productId => {
      const action = decrementProductQuantity(productId)
      return dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
