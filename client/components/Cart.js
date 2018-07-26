import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const cartDummyData = {
	cartItems: [
    {
      productId: 1,
      quantity: 3,
      unitPrice: 100
    },
    {
      productId: 2,
      quantity: 1,
      unitPrice: 200
    },
  ],
	totalCartPrice: 500,
	totalCartQuantity: 4
}

class Cart extends Component {

  render() {
    const cart = this.props.cart ? this.props.cart : cartDummyData
    console.log('Cart: ', cart)

    return (
      <div className="cart">
        <h1>CART</h1>
        <h3>Number of items: {cart.totalCartQuantity}</h3>
        <h3>Total Price: {cart.totalCartPrice}</h3>

      </div>
    )
  }
}


const mapStateToProps = (state) => {
	return {
    cart: state.cart,
  }
}


export default connect(mapStateToProps)(Cart)

