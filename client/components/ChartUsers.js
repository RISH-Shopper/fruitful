import React, {Component} from 'react'
import {connect} from 'react-redux'
import { fetchAnalytics } from '../store'
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';





class ChartUsers extends Component {

  componentDidMount () {
    this.props.fetchAnalytics("ordersByUser")
  }

  render() {
    const data = this.props.data
    if (data.length && data[0].email) {
      return (
        <div className="chartUsers">
          <h2>Orders by User</h2>
          <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={{ y: 10 }}
          padding={{ left: 150, right: 100, top: 0, bottom: 250}}

          >
          <VictoryBar horizontal
            style={{
              data: { fill: "#ffd000" }
            }}
            data={data}
            x="email"
            y="orders"
            labels={(d) => `${d.orders} orders`}
          />
        </VictoryChart>

        </div>
      )
    } else {
      return <div>'loading data'</div>
    }
  }
}

const mapStateToProps = (state) => {
	return {
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
)(ChartUsers)
