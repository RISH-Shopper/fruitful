import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ProductCard from './ProductCard'
import Search from './Search'
import Sidebar from './Sidebar'
import { getProducts } from '../store/product'

// const productDummyData = [

//   {id: 1,
//   title: 'DummyKiwi',
//   photo: 'https://d30y9cdsu7xlg0.cloudfront.net/png/71949-200.png',
//   price: 500,
//   inventory: 10
//   },

//   {id: 2,
//     title: 'DummyBlueberry',
//     photo: 'https://d30y9cdsu7xlg0.cloudfront.net/png/71949-200.png',
//     price: 600,
//     inventory: 10
//     },

//     {id: 3,
//       title: 'DummyWatermelon',
//       photo: 'https://d30y9cdsu7xlg0.cloudfront.net/png/71949-200.png',
//       price: 600,
//       inventory: 10
//       },
// ]

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
            <Search />
            <h1>PRODUCTS</h1>
            <h3>Currently viewing: {selectCategoryName}</h3>

            <ul className = "productCards">
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
