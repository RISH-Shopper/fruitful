import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
  const product = props.product

  return (
    <div id='product' key= {product.id} className='column'>
    <div className="h-100 card text-white bg-secondary mb-3" style={{width: '22rem'}}>
      <Link to={`/products/${product.id}`}>{product.title} </Link>
      <div>
        <img className='product-img' src={product.photo} alt='image' />
       </div>
      </div>
    </div>
  )
}





export default ProductCard




       //          <img className="card-img-top" src={student.imageURL} height={400} alt="Card image cap" />
       //            <div className="card-body">
       //              <h5 className="card-title">{student.firstName} {student.lastName}</h5>
       //              <Link to={`/students/${student.id}`}>
       //                <button type="button" className="btn btn-dark">See student profile</button>
       //              </Link>
       //            </div>
       //        </div>
       //    </div>
       //