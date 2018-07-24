import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

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

const Products = props => {

  const products = props.products ? props.products : productDummyData

	return (
		<div>
		  <h1> PRODUCTS </h1>
		    <div>
		      {
			  products.map(product => (
				<div key={product.id}><Link to={`/products/${product.id}`}> {product.title}</Link>
				  <img src={product.photo} height= {200}/>
				   <p>{product.price}</p></div>
			  ))
		      }
		   </div>
		</div>
		)
}

// const mapStateToProps = (state) => {
// 	return state.products
// }

// export default connect(mapStateToProps)(Products)

export default Products
