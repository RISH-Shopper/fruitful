import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateProduct} from '../store/product'
import Form from './Form'

class EditProduct extends Component {
  constructor(props) {
    super(props)
    const productId = +props.match.params.productId
    const selectedProduct = props.products.find(
      product => product.id === productId
    )
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

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const {title, description, price, inventory, photo} = this.state
    const productId = +this.props.match.params.productId

    this.props.updateProduct(
      {title, description, price, inventory, photo},
      productId
    )
  }

  render() {
    const productId = +this.props.match.params.productId
    const selectedProduct = this.props.products.find(
      product => product.id === productId
    )
    return (
      selectedProduct && (
        <div className="row">
          <div className="col-4">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="title" />
                <h3 className="font-weight-bold">EDIT PRODUCT</h3>
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
                <small id="title" className="form-text text-muted" />

                <label htmlFor="description" />
                <input
                  type="text"
                  name="description"
                  onChange={this.handleChange}
                  value={this.state.description}
                  className="form-control col-lg-20s"
                  id="description"
                  aria-describedby="description"
                />
                <small id="title" className="form-text text-muted" />

                <label htmlFor="description" />
                <input
                  type="text"
                  name="price"
                  onChange={this.handleChange}
                  value={this.state.price/100}
                  className="form-control col-lg-20s"
                  id="price"
                  aria-describedby="price"
                />
                <small id="title" className="form-text text-muted" />

                <label htmlFor="inventory" />
                <input
                  type="text"
                  name="inventory"
                  onChange={this.handleChange}
                  value={this.state.inventory}
                  className="form-control col-lg-20s"
                  id="inventory"
                  aria-describedby="inventory"
                />

                <label htmlFor="photo" />
                <input
                  type="text"
                  name="photo"
                  onChange={this.handleChange}
                  value={this.state.photo}
                  className="form-control col-lg-20s"
                  id="inventory"
                  aria-describedby="photo"
                />
                <small id="photo" className="form-text text-muted" />

                <button
                  className="btn btn-secondary col md-4 center-block"
                  type="submit"
                  onClick={this.submit}
                >
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateProduct: (product, productId) =>
      dispatch(updateProduct(product, productId, ownProps.history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct)
