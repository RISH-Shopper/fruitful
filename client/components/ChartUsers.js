import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getProducts } from '../store/product'





class ChartUsers extends Component {

  calculateOrdersByUsers = () => {
    const orders = this.props.orders
  }

  render() {

    return (
      <div className="chartUsers">
        <h3>USERS</h3>

        <div>Orders by User</div>
        <div>[chart]</div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return {
    users: state.users,
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
)(ChartUsers)
