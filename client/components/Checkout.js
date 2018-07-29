import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Elements, StripeProvider} from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

class Checkout extends Component {
  constructor() {
    super()
  }

  render() {
    console.log("CHECKOUT_ORDER", this.props.order)
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

const mapStateToProps = state => {

return { order: state.cartOrder }
}

export default connect(mapStateToProps)(Checkout)
