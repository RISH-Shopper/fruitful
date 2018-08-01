import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, user} = props

  return (
    <div className="landingPage" id="userHome">
      <h2>Welcome, {email}</h2>
      <div>
        <h3><Link to="/home/orders">My Orders</Link></h3>
        <h3><Link to="/products">Shop Fruit</Link></h3>
        <h3><Link to="/cart">View Cart</Link></h3>
        {user.admin && (
            <div>
              <h3><Link to="/addProduct">Add Product</Link></h3>
              <h3><Link to="/orders">View Orders</Link></h3>
              <h3><Link to="/analytics">Analytics</Link></h3>
            </div>
          )}
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    user: state.user
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
