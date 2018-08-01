import React, {Component} from 'react'
import {connect} from 'react-redux'
import { ChartOrders, ChartProducts, ChartUsers } from './'
import { fetchOrders } from '../store'

class Analytics extends Component {

  constructor(){
    super()
    this.state = {
      currentChart: ChartUsers,
      charts: {
        ChartOrders: ChartOrders,
        ChartProducts: ChartProducts,
        ChartUsers: ChartUsers
      }
    }
  }

  componentDidMount () {
    this.props.fetchOrders()
  }

  handleClick = (evt) => {
    evt.preventDefault()
    const {charts} = this.state
    this.setState({currentChart: charts[evt.target.value]})
  }

  render() {
    const Chart = this.state.currentChart

    return (
      <div>
      <div className="landingPage" id="analyticsHeader">
        <h2>ANALYTICS</h2>
        <div className="analyticsButtons">
          <button type="button" value="ChartUsers" onClick={this.handleClick}>Users</button>
          <button type="button" value="ChartOrders" onClick={this.handleClick}>Orders</button>
          <button type="button" value="ChartProducts" onClick={this.handleClick}>Products</button>
        </div>
        </div>

        <div>
          < Chart />
        </div>

      </div>
    )
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
)(Analytics)
