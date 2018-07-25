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

<<<<<<< HEAD
class Products extends Component {
  componentDidMount () {
    this.props.getProducts()
  }

  render () {
    const { products } = this.props
    console.log('PRODUCTS------', products)

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
            <ul>
              {products.map(product => (
                <ProductCard product={product} key={product.id} />
              ))}
            </ul>
          </div>
        </div>
      )
    }
  }
=======
const Products = props => {
	console.log('prod', props.products);
	return props.products ? (
		<div className= "products">
      <Sidebar />
      <div>
        <Search />
        <h1>PRODUCTS</h1>
        <ul>
          {props.products.map(product => (
            <ProductCard product={product} key={product.id} />
          ))}
        </ul>
      </div>
		</div>
	) : null
>>>>>>> 98534834d594fbdd63da1ecaaf3d710ba6bd5d77
}

const mapStateToProps = (state) => {
	return {
    products: state.products.products
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
