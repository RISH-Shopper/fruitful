import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ProductCard from './ProductCard'
import Sidebar from './Sidebar'
import { getProducts } from '../store/product'


class Products extends Component {
  componentDidMount () {
    this.props.getProducts()
  }


  filterByCategory = products => ( products.filter( product => {
    const productCategories = product.categories.map(category => category.id)
    return productCategories.includes(+this.props.categories.selectedCategory)
    })
  )

  render () {
    // Needs to be "let" rather than const so that we can change when filtering
    let { products } = this.props

    // Filters by category if there is a selected category
    const categories = this.props.categories.categories
    const selectedCategory = this.props.categories.selectedCategory
    if (selectedCategory) {
      products = this.filterByCategory(products)
    }

    const selectCategoryName = (selectedCategory
                              ? categories.find(cat => +cat.id === +selectedCategory).title
                              : 'All Products')

    if (!products.length) {
      return (
        <div>
          <p>There are currently no available products.</p>
        </div>
      )
    } else {
      return (
        <div className= "products">
          <Sidebar />
          <div>
            <div class="shadow-lg p-3 mb-5 bg-light rounded font-weight-normal text-center">
              <h3>Currently viewing: {selectCategoryName}</h3>
            </div>
            <ul className = "card-group">
              {products.map(product => (
                <ProductCard product={product} key={product.id} />
              ))}
            </ul>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
	return {
    products: state.products.products,
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)
