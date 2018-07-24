import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

<<<<<<< HEAD
=======

>>>>>>> master
const Products = props => {

	return (
		<div>
		  <h1> PRODUCTS </h1>
		    <div>
		      {
			  props.products.map(product => (
<<<<<<< HEAD
				<Link to={`/products/${product.id}`}> {product.title}</Link>
				  <img src={product.photo} height= {200}/>
				   <p>{product.price}</p>
=======
				<div key={product.id}><Link to={`/products/${product.id}`}> {product.title}</Link>
				  <img src={product.photo} height= {200}/>
				   <p>{product.price}</p></div>
>>>>>>> master
			  ))
		      }
		   </div>
		</div>
		)
}

const mapStateToProps = (state) => {
	return state.products
}

<<<<<<< HEAD
export default connect(mapStateToProps)(Products)
=======
export default connect(mapStateToProps)(Products)
>>>>>>> master
