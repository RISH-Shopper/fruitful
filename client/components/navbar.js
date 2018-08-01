import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Navbar = ({isLoggedIn, isAdmin}) => (
  <div className="navBar">
    <img src="grape.png"/>
    <h2 className="navTitle"><Link to="/welcome">FRUITFUL</Link></h2>
    <nav>
      {isLoggedIn ? (
        <div className="loggedInLinks">
          {/* The navbar will show these links after you log in */}
          <div>
          <Link to="/home">Profile</Link>
          <Link to="/products">Shop</Link>
          <Link to="/cart"><img src="cart.png"/>View Cart</Link>
          <Link to="/logout"> Logout</Link>
          </div>
          {isAdmin && (
            <div className="adminLinks">
              <Link to="/addProduct">Add Product</Link>
              <Link to="/orders">View Orders</Link>
              <Link to="/analytics">Analytics</Link>
            </div>
          )}
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/products">Shop</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/cart"><img src="cart.png"/>View Cart</Link>
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
