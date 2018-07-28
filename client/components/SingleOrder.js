import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchOrder } from '../store'

class SingleOrder extends Component {
  componentDidMount () {
    this.props.fetchOrder(this.props.match.params.orderId)
  }

  render () {
    const { orders } = this.props
    const orderId = +this.props.match.params.orderId
    const singleOrder = orders.find(order => order.id === orderId)
    console.log('order----', orders)

    // if (!singleOrder) {
    //   return (
    //     <div>
    //       <h2>This order does not exist.</h2>
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div>
    //       <h2>Order #{orderId} details</h2>
    //       <div>
    //         <ul>
    //           <li>Date created: </li>
    //           <li>Status:

    //           </li>
    //           <li>Customer: </li>
    //         </ul>
    //       </div>
    //     </div>
    //   )
    // }
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
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
