import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createOrder} from '../store/cartOrder'
import {cartTotalPrice, formatter} from '../store/helper'




class Cart extends Component {
  constructor(){
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleSubmit(evt) {
    evt.preventDefault()

    this.props.createNewOrder({
      userId: this.props.user.id || '99',
      totalPrice: this.props.totalPrice
    })

    this.props.history.push('/checkout')
  }

  renderProductItems = () => {
    return this.props.productList.map(this.renderProductItem)
  }

  renderProductItem = productItem => {
    return (
      <div key={productItem.product.id} className='product-item'>
        <div>Name: {productItem.product.title}</div>
        <img src={productItem.product.photo} />
        <div>
          Unit Price: {formatter.format(productItem.product.price / 100)}
        </div>
        <div>quantity: {productItem.quantity}</div>
      </div>
    )
  }

  render() {
    const productList = this.props.productList

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
        <h3 className='total-number-items'>Total number of items: {totalProductQuantity}</h3>
        <h3 className='total-cost'>Total cost: {totalPrice}</h3>




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
    createNewOrder: (userIdandPrice) => dispatch(createOrder(userIdandPrice))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
