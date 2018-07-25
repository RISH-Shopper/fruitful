import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom";


class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      productTitle: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({ productTitle: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    const searchProduct = this.props.products.filter(elem => elem.title === this.state.productTitle)
    const searchedForProduct = searchProduct[0]
    if (!searchProduct[0]){
      console.log("NO PRODUCT NAME FOUND")
    }else{
      console.log("YOU ARE LOOKING FOR: ", searchedForProduct.id)
      this.props.history.push(`/products/${searchedForProduct.id}`)
    }

  }

  render() {

    console.log("SEARCH", this.props)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Search for a product: </label>
          <input
            type="text"
            name="productTitle"
            onChange={this.handleChange}
          />
          <button
            type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
	return state.products
}


export default connect(mapStateToProps)(Search)
