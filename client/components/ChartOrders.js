import React, {Component} from 'react'
import {connect} from 'react-redux'
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';
import { fetchAnalytics } from '../store'





class ChartOrders extends Component {

  componentDidMount () {
    this.props.fetchAnalytics("ordersByMonth")
  }

  render() {
    const data = this.props.data
    const months = {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December"
    }

    if (data.length && data[0].month) {
      return (
        <div className="chartOrders">
          <h2>Orders by month</h2>
          <VictoryChart
            theme={VictoryTheme.material}
            // domain={{ y: [0, 10] }}
            padding={{ left: 30, right: 30, top: 10, bottom: 200 }}
          >
            <VictoryAxis tickFormat={tick=>months[tick]}/>
            <VictoryAxis dependentAxis tickFormat={(tick) => tick}/>
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
