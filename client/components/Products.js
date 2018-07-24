import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const Products = props => {

	return (
		<div>
		  <h1> PRODUCTS </h1>
		    <div>
		      {
			  props.products.map(product => (
				<div key={product.id}><Link to={`/products/${product.id}`}> {product.title}</Link>
				  <img src={product.photo} height= {200}/>
				   <p>{product.price}</p></div>
			  ))
		      }
		   </div>
		</div>
		)
}

const mapStateToProps = (state) => {
	return state.products
}

export default connect(mapStateToProps)(Products)
