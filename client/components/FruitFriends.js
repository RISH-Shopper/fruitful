import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createOrder} from '../store/cartOrder'
import {cartTotalPrice, formatter} from '../store/helper'
import { getCartFromSession, logout } from '../store';

class FruitFriends extends Component {
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

  renderProductItems = (itemsToRender) => {
    return itemsToRender.map(this.renderProductItem)
  }

  renderProductItem = productItem => {
    return (
      <div key={productItem.id} className='fruitFriendCard'>
        <div>Your {productItem.title.toLowerCase()} will miss you!</div>
        <div><img src={productItem.photo} /></div>
      </div>
    )
  }

  render() {

    return (
      <div>
        <div className="landingPage" id="fruitFriendsHeader">
          <div><h2>Do you really want to abandon your fruit friends?</h2>
          <h6>_</h6>
          </div>
        </div>
        <div className="landingPage" id="fruitFriends">
        {this.renderProductItems(this.props.productList)}
        <button type="button" onClick={this.handleCheckout}>Checkout</button>
        <button type="button" onClick={this.handleKeepShopping}>Keep Shopping</button>
        <button type="button" id="finalLogout" onClick={this.handleLogout}>Log Out</button>
        </div>
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

  return {productList, numProducts: products.length, order, user, totalPrice}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FruitFriends)
