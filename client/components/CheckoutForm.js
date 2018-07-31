import React, {Component} from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'
import axios from 'axios';

class CheckoutForm extends Component {
  constructor() {
    super()
    this.state = {
      userId: '',
      email: '',
      fullName: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      country: '',
      phoneNumber: '',
      complete: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  // async componentDidMount(){
  //   console.log('PROPS--------', this.props)
  //   let me = await axios.get('/auth/me');
  //   console.log('meeeeeee', me)

  //   if (me) {
  //     this.setState({
  //       email: me.data.email,
  //       userId: me.data.id
  //     })
  //   } else {
  //     this.setState({
  //       email: '',
  //       userId: 0
  //     })
  //   }
  // }

  async submit(evt) {
    evt.preventDefault()
    const { fullName } = this.state
    let {token} = await this.props.stripe.createToken({
      name: fullName
    })

    let postBody = {
      token: {...token},
      userId: this.props.user.id
    }
    let response = await axios.post('/api/payment/stripe', postBody)


    if (response.status === 200) {
      this.setState({complete: true})
      this.props.order.order.isComplete = true
      this.props.completeOrder(this.props.order.order)
      //this.props.addOrderProducts(theOrderProductsInfo)

      // clear cart saved on session
      await axios.post('/api/session/', {cart: {}})

    }
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>

    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <form>
          <div>
          <label htmlFor='form'>Email</label>
            <div>
              <input
                type='text'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <h3>Shipping Address</h3>
          <div>
            <label htmlFor='form'>Full Name</label>
            <div>
              <input
                type='text'
                name='fullName'
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor='form'>Address line 1</label>
            <div>
              <input
                type='text'
                name='address1'
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor='form'>Address line 2</label>
            <div>
              <input
                type='text'
                name='address2'
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor='form'>City</label>
            <div>
              <input
                type='text'
                name='city'
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor='form'>State/Province/Region</label>
            <div>
              <input
                type='text'
                name='state'
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor='form'>Zip Code</label>
            <div>
              <input
                type='text'
                name='zipcode'
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor='form'>Country</label>
            <div>
              <input
                type='text'
                name='country'
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor='form'>Phone Number</label>
            <div>
              <input
                type='text'
                name='phoneNumber'
                onChange={this.handleChange}
              />
            </div>
          </div>
        </form>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    )
  }
}

export default injectStripe(CheckoutForm)
