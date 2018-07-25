import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateProduct } from '../store/product'
import Form from './Form'

class EditProduct extends Component {
  constructor (props) {
    super(props)
    const productId = +props.match.params.productId
    const selectedProduct = props.products.find(product => product.id === productId)
    this.state = {
      title: '' || selectedProduct.title,
      description: '' || selectedProduct.description,
      price: '' || selectedProduct.price,
      inventory: '' || selectedProduct.inventory,
      photo: '' || selectedProduct.photo
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (evt) {
    console.log('props-----', this.props.products)
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit (evt) {
    evt.preventDefault()
    const { title, description, price, inventory, photo } = this.state
    const productId = +this.props.match.params.productId

    this.props.updateProduct({ title, description, price, inventory, photo }, productId)
  }

  render () {
    console.log('PROOOOOPPPPPSSSSS', this.props)
    const { products } = this.props
    const productId = +this.props.match.params.productId
    const selectedProduct = products.find(product => product.id === productId)
    return (
      <div>
        <h2>Edit Product</h2>
        {
          selectedProduct &&
          <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          title={selectedProduct.title}
          description={selectedProduct.description}
          price={selectedProduct.price}
          inventory={selectedProduct.inventory}
          photo={selectedProduct.photo}
        />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateProduct: (product, productId) => dispatch(updateProduct(product, productId, ownProps.history))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProduct)
