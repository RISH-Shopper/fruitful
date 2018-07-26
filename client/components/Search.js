import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      productTitle: '',
      redirect: false,
      productToSearch: '',
      noProductToDisplay: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setRedirect = this.setRedirect.bind(this)
    this.renderRedirect = this.renderRedirect.bind(this)
  }
  handleChange(event) {
    this.setState({productTitle: event.target.value})
  }
  setRedirect() {
    this.setState({
      redirect: true
    })
  }
  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect to={`/products/${this.state.productToSearch.id}`} />
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    const searchProduct = this.props.products.filter(
      elem => elem.title.toLowerCase() === this.state.productTitle.toLowerCase()
    )
    const searchedForProduct = searchProduct[0]
    if (!searchedForProduct) {
      this.setState({
        noProductToDisplay: true
      })
    } else {
      this.setState({productToSearch: searchedForProduct})
      this.setRedirect()
    }
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <form onSubmit={this.handleSubmit}>
          <label> Search for a product: </label>
          <input type="text" name="productTitle" onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
        {this.state.noProductToDisplay ? (
          <h4>No Product Found By That Name</h4>
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products
  }
}

export default connect(mapStateToProps)(Search)
