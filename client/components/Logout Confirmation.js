import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createOrder} from '../store/cartOrder'
import {cartTotalPrice, formatter} from '../store/helper'
import { getCartFromSession, logout } from '../store';



class Cart extends Component {
  constructor(){
    super()
  }

  componentDidMount(){
    this.props.setCartFromSession()
  }

  handleCheckout = (evt) => {
    evt.preventDefault()

    this.props.createNewOrder({
      userId: this.props.user.id || '99',
      totalPrice: this.props.totalPrice
    })

    this.props.history.push('/checkout')
  }

  handleLogout = (evt) => {
    evt.preventDefault()
    this.props.logout()
  }

  handleKeepShopping = (evt) => {
    evt.preventDefault()
    this.props.history.push('/products')
  }

  renderProductItems = () => {
    return this.props.productList.map(this.renderProductItem)
  }

  renderProductItem = productItem => {
    return (
      <div key={productItem.product.id} className='product-item'>
        <div>Your {productItem.product.title.toLowerCase()} friends will miss you!</div>
        <img src={productItem.product.photo} />
      </div>
    )
  }

  render() {


    return (
      <div className="cart">
        <h2>Are you sure you want to log out?</h2>
        <h3>To keep our delicious stock fresh and available, we cannot hold items in your cart after you log out.</h3>
        {this.renderProductItems()}

        <button type="button" onClick={this.handleCheckout}>Checkout</button>
        <button type="button" onClick={this.handleKeepShopping}>Keep Shopping</button>
        <button type="button" onClick={this.handleLogout}>Log Out</button>
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
  const totalPrice = (cartTotalPrice(state)*100)

  for (var productId in items) {
    let product = products.find(product => product.id == productId)
    if (product) {
      productList.push({product, quantity: items[productId]})
    }
  }

  return {productList, order, user, totalPrice}
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewOrder: (userIdandPrice) => dispatch(createOrder(userIdandPrice)),
    setCartFromSession: (cart) => dispatch(getCartFromSession(cart)),
    logout() {
      dispatch(logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
