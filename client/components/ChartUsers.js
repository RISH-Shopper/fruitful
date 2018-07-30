import React, {Component} from 'react'
import {connect} from 'react-redux'
import { fetchOrdersByUser } from '../store'
import BarChart from './BarChart'





class ChartUsers extends Component {

  componentDidMount () {
    this.props.fetchOrdersByUser()
  }

  render() {
    const data = this.props.ordersByUser
    return (
      <div className="chartUsers">
        <h3>USERS</h3>

        <strong>Orders by User</strong>
        <svg width="100%" height="500">
          <BarChart data={data} independent="email" dependent="orders" />
        </svg>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return {
    users: state.users,
    orders: state.order.orders,
    ordersByUser: state.analytics.ordersByUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrdersByUser: () => dispatch(fetchOrdersByUser())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartUsers)
