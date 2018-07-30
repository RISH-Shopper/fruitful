import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getProducts } from '../store/product'





class ChartOrders extends Component {


  render() {

    return (
      <div className="chartOrders">
        <h3>ORDERS</h3>
        <div>Total Orders: {this.props.orders.length} </div>

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
