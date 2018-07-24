import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ProdudctCard from './ProductCard'
import ProductCard from './ProductCard';

const productDummyData = [

  {id: 1,
  title: 'DummyKiwi',
  photo: 'https://d30y9cdsu7xlg0.cloudfront.net/png/71949-200.png',
  price: 500,
  inventory: 10
  },

  {id: 2,
    title: 'DummyBlueberry',
    photo: 'https://d30y9cdsu7xlg0.cloudfront.net/png/71949-200.png',
    price: 600,
    inventory: 10
    },

    {id: 3,
      title: 'DummyWatermelon',
      photo: 'https://d30y9cdsu7xlg0.cloudfront.net/png/71949-200.png',
      price: 600,
      inventory: 10
      },
]
export const Products = props => {

  const products = props.products ? props.products : productDummyData

	return (
		<div>
		  <h1>PRODUCTS</h1>
      <ul>
        {
          products.map(product => (
            <ProductCard product={product} key={product.id} />
          ))
        }
      </ul>
		</div>
		)
}

// const mapStateToProps = (state) => {
// 	return state.products
// }

// export default connect(mapStateToProps)(Products)



