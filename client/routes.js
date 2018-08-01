import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome, Products, SingleProduct, Cart, AddProduct, EditProduct, Checkout, AllOrders, SingleOrder, OrderHistory, Analytics, FruitFriends, LogoutConfirmation, PromptCheckout, Welcome} from './components'
import {me, getProducts, getCategories, getCartFromSession} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const { isLoggedIn, isAdmin } = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={Welcome} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/prompt" component={PromptCheckout} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:productId" component={SingleProduct} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />

        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route exact path="/home" component={UserHome} />
            <Route exact path="/home/orders" component={OrderHistory} />
            <Route exact path="/orders/:orderId" component={SingleOrder} />
            <Route exact path="/logout" component={LogoutConfirmation} />
            <Route exact path="/fruitfriends" component={FruitFriends} />
            <Route exact path = "/" component={Welcome} />
            {isAdmin && (
              <Switch>
                <Route exact path="/orders" component={AllOrders} />
                <Route exact path="/analytics" component={Analytics} />
                <Route exact path="/products/:productId/edit" component={EditProduct} />
                <Route exact path="/addProduct" component={AddProduct} />
              </Switch>
            )}
            <Route path = "/" component={Welcome} />
          </Switch>
        )}
        {/* Displays our welcome component as a fallback */}
        <Route path = "/" component={Welcome} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    isAdmin: state.user.admin
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
      dispatch(getProducts())
      dispatch(getCategories())
      dispatch(getCartFromSession())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
