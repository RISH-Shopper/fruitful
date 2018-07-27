import React, { Component } from 'react'

class Checkout extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
      fullName: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      country: '',
      phoneNumber: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit (evt) {
    evt.preventDefault()
    const { email, fullName, address1, address2, city, state, zipcode, country, phoneNumber } = this.state

  }

  render () {
    return (
      <div>
        <h2>Checkout</h2>
        <form>
          <div>
          <label htmlFor='form'>Email</label>
            <div>
              <input
                type='text'
                name='email'
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
          <span>
            <button type='submit'>Submit</button>
          </span>
        </form>
      </div>
    )
  }
}

export default Checkout
