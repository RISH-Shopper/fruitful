import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchOrders } from '../store'

class AllOrders extends Component {
  componentDidMount () {
    this.props.fetchOrders()
  }

  render () {
    const { orders } = this.props
    console.log('orders------', orders)

    if (!orders) {
      return (
        <div>
          <h2>There are no existing orders.</h2>
        </div>
      )
    } else {
      return (
        <div>
          <h2>Orders</h2>
          <table>
            <tbody>
              <tr>
                <th>Order No.</th>
                <th>Client Email</th>
                <th>Order Date</th>
                <th>Status</th>
              </tr>
              {
                orders.map(order => (
                  <tr key={order.id}>
                    <td>
                      <Link to={`/orders/${order.id}`}>{order.id}</Link>
                    </td>
                    <td>{order.user.email}</td>
                    <td>{order.createdAt.slice(0,10)}</td>
                    {order.isShipped ?
                      (
                        <td>Shipped</td>
                      ) : (
                        <td>Processing</td>
                      )
                    }
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      )
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
)(AllOrders)
