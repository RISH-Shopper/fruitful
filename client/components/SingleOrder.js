import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchOrder } from '../store'

class SingleOrder extends Component {
  componentDidMount () {
    this.props.fetchOrder(this.props.match.params.orderId)
  }

  render () {
    const { singleOrder } = this.props
    const orderId = +this.props.match.params.orderId

    if (!singleOrder) {
      return <div>This order does not exist!</div>
    }

    if (singleOrder && singleOrder.createdAt && singleOrder.user && singleOrder.order_products) {
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
    singleOrder: state.order.singleOrder,
    products: state.products.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrder: (orderId) => dispatch(fetchOrder(orderId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleOrder)
