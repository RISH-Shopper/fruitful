import React from 'react'
import {Link} from 'react-router-dom'

const ProductCard = props => {
	const product = props.product

	return (
		<div id="product" key={product.id} className="column">
			<div className="card border-light mb-3" style={{width: '15rem'}}>
				<h5 className="card-title primary">{product.title}</h5>
				<Link to={`/products/${product.id}`}>see more </Link>
				<div>
					<img className="card-img-top" src={product.photo} alt="Card image cap" height={220} />
				</div>
			</div>
		</div>
	)
}

export default ProductCard

