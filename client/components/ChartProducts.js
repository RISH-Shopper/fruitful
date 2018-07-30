import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getProducts } from '../store/product'





class ChartProducts extends Component {



  render() {

    return (
      <div className="chartProducts">
        <h3>PRODUCTS</h3>


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
)(ChartProducts)
