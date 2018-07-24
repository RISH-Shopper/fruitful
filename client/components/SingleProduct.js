import React from 'react'
import { connect } from 'react-redux'
import Products from './Products'
//import thunks from store once created

class SingleProduct extends React.Component{
	constructor(){
		super()
		this.state = {quantity:''}
  }

  handleChange(event) {
    this.setState({ [event.target.quantity]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    //add to cart
  }

render(){
	return (
    <div>
    <form onSubmit={this.handleSubmit}>
          <label>{product.title}</label>
          <img src={product.photo} />
          <p>{product.description}</p>
          <select name="quantity" onChange={this.handleChange}>
            <option value="">--</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <button type="submit">
            Add to Cart
          </button>
        </form>
        </div>
  )
}




















}



