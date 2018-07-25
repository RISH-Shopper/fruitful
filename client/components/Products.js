import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ProductCard from './ProductCard'

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
	console.log('prod', props);
	return props.products ? (
		<div>
			<h1>PRODUCTS</h1>
			<ul>
				{props.products.map(product => (
					<ProductCard product={product} key={product.id} />
				))}
			</ul>
		</div>
	) : null
}

const mapStateToProps = (state) => {
	return state.products
}

export default connect(mapStateToProps)(Products)
