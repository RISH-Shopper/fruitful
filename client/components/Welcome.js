import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import Search from './Search'

const Welcome = ({isLoggedIn, isAdmin}) => (
  <div>
    <h1>Welcome to Fruitful!</h1>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* Shown after you log in */}
          <h2><Link to="/products">Continue Shopping</Link></h2>
          <h2><Link to="/cart">View Cart</Link></h2>
          {isAdmin && (
            <div>
              <h2><Link to="/addProduct">Add Product</Link></h2>
              <h2><Link to="/orders">View Orders</Link></h2>
              <h2><Link to="/analytics">Analytics</Link></h2>
            </div>
          )}
        </div>
      ) : (
        <div>
          {/* Shown before you log in */}
          <h2><Link to="/products">Start Shopping</Link></h2>
          <h2><Link to="/cart">View Cart</Link></h2>
          <h2><Link to="/login">Login</Link></h2>
          <h2><Link to="/signup">Sign Up</Link></h2>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    isAdmin: state.user.admin
  }
}

export default connect(mapState)(Welcome)

