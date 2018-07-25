import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom";


class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      productTitle: '',
      redirect: false,
      productToSearch: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setRedirect = this.setRedirect.bind(this)
    this.renderRedirect = this.renderRedirect.bind(this)
  }
  handleChange(event) {
    this.setState({ productTitle: event.target.value })
  }
  setRedirect() {
    this.setState({
      redirect: true
    });

  }
  renderRedirect() {
    if (this.state.redirect && this.state.productToSearch) {
      return <Redirect to={`/products/${this.state.productToSearch.id}`} />
    }

  }

  handleSubmit(event) {
    event.preventDefault();
    const searchProduct = this.props.products.filter(elem => elem.title === this.state.productTitle)
    const searchedForProduct = searchProduct[0]
    if (!searchedForProduct){
      console.log("NO PRODUCT NAME FOUND")
    }else{
      this.setState({ productToSearch: searchedForProduct })
      this.setRedirect();
    }

  }

  render() {
    return (
      <div>
                {this.renderRedirect()}
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
