import React, { Component } from 'react'
import { connect } from 'react-redux'
import product, { createProduct } from '../store/product'
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
    const { title, description, price, inventory, photo } = this.state

    this.props.createProduct({ title, description, price, inventory, photo })
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createProduct: prodcut => dispatch(createProduct(product, ownProps.history))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddProduct)
