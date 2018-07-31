import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ProductCard from './ProductCard'
import Sidebar from './Sidebar'
import {getProducts} from '../store/product'

class Products extends Component {
  componentDidMount() {
    this.props.getProducts()
  }

  filterByCategory = products =>
    products.filter(product => {
      const productCategories = product.categories.map(category => category.id)
      return productCategories.includes(+this.props.categories.selectedCategory)
    })

  renderProductList = () => {
    // Needs to be "let" rather than const so that we can change when filtering
    let {products} = this.props

    // Filters by category if there is a selected category
    const categories = this.props.categories.categories
    const selectedCategory = this.props.categories.selectedCategory
    if (selectedCategory) {
      products = this.filterByCategory(products)
    }

    const selectCategoryName = selectedCategory
      ? categories.find(cat => +cat.id === +selectedCategory).title
      : 'All Products'

    console.log(this.props)
    if (!this.props.products.length) {
      return <p>There are currently no available products.</p>
    } else {
      return (
        <div>
          <div className="shadow-lg p-3 mb-5 bg-light rounded font-weight-normal text-center">
            <h3>Currently viewing: {selectCategoryName}</h3>
          </div>
          <ul className="card-group">
            {products.map(product => (
              <ProductCard product={product} key={product.id} />
            ))}
          </ul>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="products">
        <Sidebar />
        {this.renderProductList()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  let foundProductIds = state.search.foundProductIds
  let products;
  if (foundProductIds.length === 0) {
    products = state.products.products
  } else {
    products = state.products.products.filter(product =>
      foundProductIds.includes(product.id)
    )
  }

  return {
    products: products,
    categories: state.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
