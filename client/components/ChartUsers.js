import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getProducts } from '../store/product'





class ChartUsers extends Component {


  render() {

    return (
      <div className="chartUsers">
        <h3>USERS</h3>


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
)(ChartUsers)
