import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProduct } from '../store/product'

class AddProduct extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description: '',
      price: '',
      inventory: '',
      photo: '',
      formErrors: {
        title: '',
        description: '',
        price: '',
        inventory: ''
      },
      titleValid: false,
      descriptionValid: false,
      priceValid: false,
      inventoryValid: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateField = this.validateField.bind(this)
    this.validateForm = this.validateForm.bind(this)
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors
    let titleValid = this.state.titleValid
    let descriptionValid = this.state.descriptionValid
    let priceValid = this.state.priceValid
    let inventoryValid = this.state.inventoryValid

    switch (fieldName) {
      case 'title':
        titleValid = value.length >= 1
        fieldValidationErrors.title = titleValid ? '' : ' must not be empty'
        break
      case 'description':
        descriptionValid = value.length >= 1
        fieldValidationErrors.description = descriptionValid
          ? ''
          : ' must not be empty'
        break
      case 'price':
        priceValid = value.match(/^[0-9]*$/)
        fieldValidationErrors.price = priceValid ? '' : ' must be a valid integer'
        break
      case 'inventory':
        this.state.inventoryValid = value.match(/^[0-9]*$/)
        fieldValidationErrors.inventory = inventoryValid
          ? ''
          : ' must be a valid integer'
        break
      default:
        break
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        titleValid: titleValid,
        descriptionValid: descriptionValid,
        priceValid: priceValid,
        inventoryValid: inventoryValid
      },
      this.validateForm
    )
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.titleValid &&
        this.state.descriptionValid &&
        this.state.priceValid &&
        this.state.inventoryValid
    })
  }

  handleChange(evt) {
    const name = evt.target.name
    const value = evt.target.value
    this.setState({[name]: value}, () => {
      this.validateField(name, value)
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const {title, description, price, inventory, photo} = this.state

    this.props.createProduct({title, description, price, inventory, photo})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title" />
            <h3 className="font-weight-bold">ADD NEW PRODUCT</h3>
            <input
              type="text"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
              className="form-control col-lg-20s"
              id="nameInput"
              aria-describedby="firstName"
              placeholder="Enter name of fruit"
            />
            {this.state.formErrors.title.length > 0 ? (
                <p>
                  {this.state.title}
                  {this.state.formErrors.title}
                </p>
              ) : (
                ''
              )}
            <small id="title" className="form-text text-muted" />

            <label htmlFor="description" />
            <input
              type="text"
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
              className="form-control"
              id="description"
              aria-describedby="lastName"
              placeholder="describe your fruit"
            />
            {this.state.formErrors.description.length > 0 ? (
                <p>
                  {this.state.description}
                  {this.state.formErrors.description}
                </p>
              ) : (
                ''
              )}
            <small id="description" className="form-text text-muted" />

            <label htmlFor="price" />
            <input
              type="price"
              name="price"
              onChange={this.handleChange}
              value={this.state.price}
              className="form-control"
              id="emailInput"
              aria-describedby="price"
              placeholder="Cost in cents (ex: 200 for $2)"
            />
            {this.state.formErrors.price.length > 0 ? (
                <p>
                  {this.state.price}
                  {this.state.formErrors.price}
                </p>
              ) : (
                ''
              )}
            <small id="price" className="form-text text-muted" />

            <label htmlFor="inventory" />
            <input
              type="text"
              name="inventory"
              onChange={this.handleChange}
              value={this.state.inventory}
              className="form-control"
              id="inventory"
              aria-describedby="inventory"
              placeholder="Number of products"
            />
            {this.state.formErrors.inventory.length > 0 ? (
                <p>
                  {this.state.inventory}
                  {this.state.formErrors.inventory}
                </p>
              ) : (
                ''
              )}
            <small id="inventory" className="form-text text-muted" />

            <label htmlFor="photo" />
            <input
              type="text"
              name="photo"
              onChange={this.handleChange}
              value={this.state.photo}
              className="form-control"
              id="photo"
              aria-describedby="gpa"
              placeholder="Enter url link to photo"
            />
            <small id="photo" className="form-text text-muted" />

            <button
            disabled={
              !this.state.title ||
              !this.state.description ||
              !this.state.price ||
              !this.state.inventory
            }
              className="btn btn-secondary col md-4 center-blocks"
              type="submit"
              onClick={this.submit}
            >
              Submit
            </button>
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

export default connect(null, mapDispatchToProps)(AddProduct)
