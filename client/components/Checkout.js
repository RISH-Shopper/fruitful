import React, {Component} from 'react'
import {Elements, StripeProvider} from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'
import {cartTotalPrice, formatter} from '../store/helper'
import { connect } from 'react-redux'


class Checkout extends Component {
  render() {
    return (
      <div>
      <h1> Cost of purchase:{this.props.totalPriceInDollars}</h1>
        <StripeProvider apiKey="pk_test_6o0z0rTuKNakg2e2aU3iPolu">
          <Elements>
            <CheckoutForm />
          </Elements>
        </StripeProvider>
      </div>
    )
  }
}


const mapStateToProps = (state) =>{
  const totalPrice = cartTotalPrice(state)
  const totalPriceInDollars = formatter.format(totalPrice);
  return {totalPriceInDollars};
}

export default connect(mapStateToProps)(Checkout)
