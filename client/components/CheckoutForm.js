import React, {Component} from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'
import CheckoutConfirmation from './CheckoutConfirmation'
import axios from 'axios';

class CheckoutForm extends Component {
  constructor () {
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
      complete: false,
      formErrors: {email: '', fullName: '', address1: '', city: ''},
      emailValid: false,
      fullNameValid: false,
      address1Valid: false,
      cityValid: false,
      formValid: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
    this.validateField = this.validateField.bind(this)
    this.validateForm = this.validateForm.bind(this)
  }

  handleChange (evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) })
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors
    let emailValid = this.state.emailValid
    let fullNameValid = this.state.fullNameValid
    let address1Valid = this.state.address1Valid

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        fieldValidationErrors.email = emailValid ? '' : ' is invalid'
        break
      case 'fullName':
        fullNameValid = value.match(/^[a-zA-Z ]+$/ )
        fieldValidationErrors.fullName = fullNameValid ? '': ' is invalid'
        break
        case 'address1':
        address1Valid = value.length >= 1
        fieldValidationErrors.address1 = address1Valid ? '': ' must not be empty'
        break
        case 'city':
        this.state.cityValid = value.length >= 1
        fieldValidationErrors.city = this.state.cityValid ? '': ' must not be empty'
        break
      default:
        break
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    fullNameValid: fullNameValid
                  }, this.validateForm)
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.fullNameValid && this.state.address1Valid && this.state.cityValid})
  }



  async componentDidMount () {
    let me = await axios.get('/auth/me');

    if (me) {
      this.setState({
        email: me.data.email
      })
    }
  }

  async submit (evt) {
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
      this.props.addOrderProducts(this.props.arrayOfOrderProducts)
      // clear cart saved on session
      await axios.post('/api/session/', {cart: {}})
    }
  }

  render () {
    if (this.state.complete) return <CheckoutConfirmation />
console.log("THISSTATE", this.state)
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
              {
              (this.state.formErrors.email.length > 0) ?
          <p>{this.state.email}{this.state.formErrors.email}</p>  : ''

            }
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
               {
              (this.state.formErrors.fullName.length > 0) ?
          <p>{this.state.fullName}{this.state.formErrors.fullName}</p>  : ''

            }
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
               {
              (this.state.formErrors.address1.length > 0) ?
          <p>{this.state.address1}{this.state.formErrors.address1}</p>  : ''

            }
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
               {
              (this.state.formErrors.city.length > 0) ?
          <p>{this.state.city}{this.state.formErrors.city}</p>  : ''

            }
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
        <button type='submit' disabled={!this.state.formValid} onClick={this.submit}>Send</button>
      </div>
    )
  }
}

export default injectStripe(CheckoutForm)
