import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Elements, StripeProvider} from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'
import {updateOrder, addOrderProducts} from '../store/cartOrder'
import {cartTotalPrice, arrayOfProductOrders} from '../store/helper'

class Checkout extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <StripeProvider apiKey="pk_test_6o0z0rTuKNakg2e2aU3iPolu">
          <Elements>
            <CheckoutForm
              arrayOfOrderProducts={this.props.arrayOfOrderProducts}
              totalPrice={this.props.totalPrice}
              products={this.props.products}
              cart={this.props.cart}
              addOrderProducts={this.props.addOrderProducts}
              order={this.props.order}
              completeOrder={this.props.completeOrder}
              user={this.props.user}
            />
          </Elements>
        </StripeProvider>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const totalPrice = cartTotalPrice(state) * 100
  const arrayOfOrderProducts = arrayOfProductOrders(state)

  return {
    order: state.cartOrder,
    user: state.user,
    cart: state.cart,
    products: state.products.products,
    totalPrice,
    arrayOfOrderProducts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    completeOrder: order => dispatch(updateOrder(order)),
    addOrderProducts: orderProducts => dispatch(addOrderProducts(orderProducts))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
