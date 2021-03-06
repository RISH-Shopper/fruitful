import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createOrder} from '../store/cartOrder'
import {cartTotalPrice, formatter} from '../store/helper'
import { getCartFromSession, logout } from '../store';

class LogoutConfirmation extends Component {
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
    if(this.props.productList.length) {
      this.props.history.push('/fruitfriends')
    } else this.props.logout()
  }


  handleKeepShopping = (evt) => {
    evt.preventDefault()
    this.props.history.push('/products')
  }

  renderProductItems = (itemsToRender) => {
    return itemsToRender.map(this.renderProductItem)
  }

  renderProductItem = productItem => {
    return (
      <div key={productItem.id} className='product-item'>
        <img src={productItem.photo} />
      </div>
    )
  }

  render() {

    return (
      <div className="landingPage" id="logout">
        <h2>Are you sure you want to leave?</h2>

        { this.props.productList.length?
          <div>
          <div>
          <h3>To keep our delicious stock fresh and available, we cannot hold items beyond your shopping session.</h3>
          <h3>Your cart will be cleared if you log out.</h3>
          </div>
          <div>
          <button type="button" onClick={this.handleCheckout}>Checkout</button>
          <button type="button" onClick={this.handleKeepShopping}>Keep Shopping</button>
        <button type="button" onClick={this.handleLogout}>Log Out</button>
          </div>
          </div>
        : <span>
        <h3>There are {this.props.numProducts} delicious varieties of fruit waiting for you!</h3>
        <div>
        <button type="button" onClick={this.handleKeepShopping}>Keep Shopping</button>
        <button type="button" onClick={this.handleLogout}>Log Out</button>
        </div>
        </span>
        }
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
      productList.push(product)
    }
  }

  return {productList, allProducts: products, numProducts: products.length, order, user, totalPrice}
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

export default connect(mapStateToProps, mapDispatchToProps)(LogoutConfirmation)
