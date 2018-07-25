import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ProductCard from './ProductCard'
import Search from './Search'
import Sidebar from './Sidebar'

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
}

const mapStateToProps = (state) => {
	return state.products
}

export default connect(mapStateToProps)(Products)
