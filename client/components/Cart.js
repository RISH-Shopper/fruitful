import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class Cart extends Component {
  renderProductItems = () => {
    return this.props.productList.map(this.renderProductItem)
  }

  renderProductItem = (productItem) => {
    return (
      <div key={productItem.product.id}>
        <div>Name: {productItem.product.title}</div>
        <div>Unit Price: {productItem.product.price}</div>
        <img src={productItem.product.photo}/>
        <div>quantity: {productItem.quantity}</div>
      </div>

      );
  }

  render() {
    const productList = this.props.productList

    const totalProductQuantity = productList.reduce(function(memo, productItem) {
      return memo + productItem.quantity;
    }, 0);

    const totalPrice = productList.reduce(function(memo, productItem) {
      return memo + productItem.quantity * productItem.product.price;
    }, 0);

    return (
      <div className="cart">
        <h1>CART</h1>
        <h3>Number of items: {totalProductQuantity}</h3>
        <h3>Total Price: {totalPrice}</h3>

        {this.renderProductItems()}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  const items = state.cart.items
  const products = state.products.products

  const productList = [];

  for (var productId in items) {
    let product = products.find(product => product.id == productId)
    if (product) {
      productList.push({product, quantity: items[productId]})
    }
  }

  return { productList };
}


export default connect(mapStateToProps)(Cart)

