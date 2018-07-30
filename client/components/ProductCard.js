import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
  const product = props.product

  return (
    <div id='product' key= {product.id} className='column'>
    <div className="h-100 card text-primary bg-light mb-3" style={{width: '22rem'}}>
      <h5 class="card-title primary">{product.title}</h5>
      <Link to={`/products/${product.id}`}>see more </Link>
      <div>
        <img className="card-img-top" src={product.photo} alt='Card image cap' />
       </div>
      </div>
    </div>
  )
}





export default ProductCard