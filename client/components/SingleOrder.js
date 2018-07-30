import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchOrders } from '../store'

class SingleOrder extends Component {
  componentDidMount () {
    this.props.fetchOrders()
  }

  render () {
    const { orders } = this.props
    const orderId = +this.props.match.params.orderId
    const singleOrder = orders.find(order => order.id === orderId)
    console.log('all orders----', orders)
    console.log('order ID----', orderId)
    console.log('current order----', singleOrder)

    if (!singleOrder) {
      return <div>This order does not exist!</div>
    }

    if (orders && singleOrder && singleOrder.user && singleOrder.order_products) {
      return (
        <div>
          <h2>Order #{orderId} details</h2>
          <div>
            <ul>
                { singleOrder.createdAt &&
                  <li>Date created: {singleOrder.createdAt.slice(0,10)}</li>
                }
                {singleOrder.isShipped ?
                  (
                    <li>Status: Shipped</li>
                  ) : (
                    <li>Status: Processing</li>
                  )

                }
              <li>Customer: {singleOrder.user.email}</li>
            </ul>
          </div>
          <div>
            <h2>Purchased products:</h2>
            <table>
              <tbody>
                <tr>
                  <th>Product No.</th>
                  <th>Product Name</th>
                  <th>Product Image</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                </tr>
                {
                  singleOrder.order_products.map(product => (
                    <tr key={product.productId}>
                      <td>{product.productId}</td>
                      <td>{product.product.title}</td>
                      <td>
                        <img className='product-img' src={product.product.photo} alt='image' />
                      </td>
                      <td>{product.quantity}</td>
                      <td>{product.unitPrice}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      )
    } else {
      return <div>Loading order...</div>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: () => dispatch(fetchOrders())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleOrder)
