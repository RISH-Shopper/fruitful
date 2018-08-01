import React, {Component} from 'react'
import {connect} from 'react-redux'
import { fetchAnalytics } from '../store'
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';





class ChartProducts extends Component {

  componentDidMount () {
    this.props.fetchAnalytics("productsByUnitsPurchased")
  }

  render() {
    const data = this.props.data
    if (data.length && data[0].title) {
      return (
        <div className="chart">
          <h2>Products by Units Purchased</h2>
          <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={{ y: 10 }}
          padding={{ left: 80, right: 80, top: 0, bottom: 250 }}

          >
          <VictoryBar horizontal
            style={{
              data: { fill: "#2dc7ff" }
            }}
            data={data}
            x="title"
            y="unitsPurchased"
            labels={(d) => `${d.unitsPurchased} units`}

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
)(ChartProducts)
