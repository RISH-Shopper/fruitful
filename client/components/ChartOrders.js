import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getProducts } from '../store/product'





class ChartOrders extends Component {

  calculateOrdersByUsers(){
    const orders = this.props.orders
    const months = orders.map(order => order.createdAt.slice(0,7))
    console.log(months)
    return [months.length]
  }

  render() {


    return (
      <div className="chartOrders">
        <h3>ORDERS</h3>
        <div>Total Orders: {this.props.orders.length} </div>

        <div>Orders by month</div>
        <div>[chart] {this.calculateOrdersByUsers()}</div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return {
    orders: state.order.orders,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartOrders)
