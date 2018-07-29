import React, {Component} from 'react'
import {Elements, StripeProvider} from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

class Checkout extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <StripeProvider apiKey="pk_test_6o0z0rTuKNakg2e2aU3iPolu">
          <Elements>
            <CheckoutForm />
          </Elements>
        </StripeProvider>
      </div>
    )
  }
}

export default Checkout
