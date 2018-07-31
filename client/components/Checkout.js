import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Elements, StripeProvider} from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'
import {updateOrder} from '../store/cartOrder'

class Checkout extends Component {
  constructor() {
    super()
  }

  render() {
    console.log("CHECKOUTPROPS", this.props)
    return (
      <div>
        <StripeProvider apiKey="pk_test_6o0z0rTuKNakg2e2aU3iPolu">
          <Elements>
            <CheckoutForm order={this.props.order} completeOrder={this.props.completeOrder} user={this.props.user} />
          </Elements>
        </StripeProvider>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    order: state.cartOrder,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    completeOrder: order => dispatch(updateOrder(order))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
