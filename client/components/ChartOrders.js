import React, {Component} from 'react'
import {connect} from 'react-redux'
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import { fetchAnalytics } from '../store'





class ChartOrders extends Component {

  componentDidMount () {
    this.props.fetchAnalytics("ordersByMonth")
  }

  render() {
    const data = this.props.data

    if (data.length && data[0].month) {
      return (
        <div className="chartOrders">
          <h3>ORDERS</h3>
          <div>Total Orders: {this.props.orders.length} </div>

          <h3>Orders by month</h3>
          <VictoryChart
            theme={VictoryTheme.material}
            domain={{ y: [0, 10] }}
            padding={{ left: 30, right: 30, top: 10, bottom: 200 }}
          >
            <VictoryLine
              style={{
                data: { stroke: "#05ba20" },
                parent: { border: "1px solid #ccc"}
              }}
              data={data}
              x="month"
              y="orders"
              labels={(d) => `${d.orders}`}

            />
          </VictoryChart>

        </div>
      )
    } else return <div>'loading data'</div>
  }
}

const mapStateToProps = (state) => {
	return {
    users: state.users,
    orders: state.order.orders,
    data: state.analytics.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAnalytics: (apiPath) => dispatch(fetchAnalytics(apiPath))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartOrders)
