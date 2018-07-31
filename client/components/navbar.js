import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import Search from './Search'

const Navbar = ({isLoggedIn, isAdmin}) => (
  <div>
    <h1>FRUITFUL</h1>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <Link to="/products">View Products</Link>
          <Link to="/cart">| View Cart | </Link>
          <Link to="/logout"> Logout</Link>

          {isAdmin && (
            <div>
              <Link to="/addProduct">Add Product</Link>
              <Link to="/orders">View Orders</Link>
              <Link to="/analytics">Analytics</Link>
            </div>
          )}
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/products">View Products</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/cart">| View Cart | </Link>
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

export default connect(mapState)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
