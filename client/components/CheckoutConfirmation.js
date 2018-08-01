import React from 'react'
import {connect} from 'react-redux'
import {cartTotalPrice, arrayOfProductOrders, arrayOfCurrentOrder} from '../store/helper'

class CheckoutConfirmation extends React.Component {
  constructor() {
    super()
    this.state = {
      price: 0
    }
  }

  componentDidMount(){
    let totalPrice = (this.props.totalPrice/100)
    this.setState({
      price: totalPrice
    })
  }

  render() {
    return (
    <div><h2>Purchase Complete!  Thank you for your order!</h2>

      <h2>Order Details:</h2>
          <table>
            <tbody>
              <tr>
                <th>Fruit</th>
                <th>Quantity</th>
                <th>Unit Price</th>
              </tr>
              {
                this.props.currentOrder.map((product, index) => (
                  <tr key={index}>
                    <td>
                      {product.title}
                    </td>
                    <td>{product.quantity}</td>
                    <td>${(product.unitPrice/100)}</td>
                  </tr>
                ))
              }
              Total Amount: ${this.state.price}
            </tbody>
          </table>

      </div>
    )
  }
}

const mapStateToProps = state => {
  const totalPrice = cartTotalPrice(state) * 100
  const arrayOfOrderProducts = arrayOfProductOrders(state)
  const currentOrder = arrayOfCurrentOrder(state)

  return {
    order: state.cartOrder,
    user: state.user,
    cart: state.cart,
    products: state.products.products,
    totalPrice,
    arrayOfOrderProducts,
    currentOrder
  }
}

export default connect(mapStateToProps)(CheckoutConfirmation)
