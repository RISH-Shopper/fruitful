import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
  const product = props.product

  return (
    <div id='product-card' className='column'>
      <Link to={`/products/${product.id}`}>{product.title} </Link>
      <div>
        <img className='product-img' src={product.photo} alt='image' />
      </div>
    </div>
  )
}

export default ProductCard
