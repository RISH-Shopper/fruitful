import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {search} from '../store/search'

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
    this.props.search({query: event.target.value, products: this.props.products})
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
        <form onSubmit={this.handleSubmit} className="form-inline">
          <input id='searchInput' type="search" name="productTitle" onChange={this.handleChange} className= "form-control" placeholder="Search for product" aria-label="Search"/>
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

const mapDispatchToProps = dispatch => {
  return {
    search(queryAndProducts) {
      dispatch(search(queryAndProducts))
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
