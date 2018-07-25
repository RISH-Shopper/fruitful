import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from './Form'

class AddProduct extends Component {
  constructor () {
    super()
    this.state = {
      title: '',
      description: '',
      price: '',
      inventory: '',
      photo: ''
    }
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit (evt) {
    evt.preventDefault()
    const { title, description, price, inventory, photo } = this.state

  }

  render () {
    return (
      <div>
        <h2>New Product Form</h2>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          title={this.state.title}
          description={this.state.description}
          price={this.state.price}
          inventory={this.state.inventory}
          photo={this.state.photo}
        />
      </div>
    )
  }
}

export default
