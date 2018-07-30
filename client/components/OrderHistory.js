import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchOrders } from '../store'

class OrderHistory extends Component {
  componentDidMount () {
    this.props.fetchOrders()
  }

  render () {
    const { orders, user } = this.props
    const userOrders = orders.filter(order => order.userId === user.id)
    console.log('USER ORDERS', userOrders)

    if (!userOrders) {
      return (
        <div>
          <h2>There are no orders on this account.</h2>
        </div>
      )
    } else {
      return (
        <div>
          <h2>Order History</h2>
          <table>
            <tbody>
              <tr>
                <th>Order No.</th>
                <th>Order Date</th>
                <th>Status</th>
              </tr>
              {
                userOrders.map(order => (
                  <tr key={order.id}>
                    <td>
                      <Link to={`/orders/${order.id}`}>{order.id}</Link>
                    </td>
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
    orders: state.order.orders,
    user: state.user
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
)(OrderHistory)

