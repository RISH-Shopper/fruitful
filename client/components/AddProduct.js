import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProduct } from '../store/product'
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
    console.log('am i here?????')
    return (
      <div>

         <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title" />
            <h3 className="font-weight-bold">ADD NEW PRODUCT</h3>
            <input type="text" name="title"  onChange={this.handleChange} value={this.state.title}
            className="form-control col-lg-20s" id="nameInput" aria-describedby="firstName" placeholder="Enter name of fruit" />
            <small id="title" className="form-text text-muted" />

            <label htmlFor="description" />
            <input type="text" name="description"  onChange={this.handleChange} value={this.state.description}
            className="form-control" id="description" aria-describedby="lastName" placeholder="describe your fruit" />
            <small id="description" className="form-text text-muted" />

            <label htmlFor="price" />
            <input type="price" name="price"  onChange={this.handleChange} value={this.state.price}
            className="form-control" id="emailInput" aria-describedby="price" placeholder="Cost of fruit (ex: 2)" />
            <small id="price" className="form-text text-muted" />

            <label htmlFor="inventory" />
            <input type="text" name="inventory"  onChange={this.handleChange} value={this.state.inventory}
            className="form-control" id="inventory" aria-describedby="inventory" placeholder="Number of products" />
            <small id="inventory" className="form-text text-muted" />

            <label htmlFor="photo" />
            <input type="text" name="photo"  onChange={this.handleChange} value={this.state.photo}
            className="form-control" id="photo" aria-describedby="gpa" placeholder="Enter url link to photo" />
            <small id="photo" className="form-text text-muted" />

            <button className="btn btn-secondary col md-4 center-blocks" type='submit' onClick={this.submit}>Submit</button>

        </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createProduct: product => dispatch(createProduct(product, ownProps.history))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddProduct)
