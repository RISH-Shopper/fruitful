import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Welcome = ({isLoggedIn, isAdmin}) => (
  <div className="landingPage" id="welcome">
    <h1>FRUITFUL</h1>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* Shown after you log in */}
          <h4><Link to="/products">Continue Shopping</Link></h4>
          <h4><Link to="/cart">View Cart</Link></h4>
          {isAdmin && (
            <div>
              <h4><Link to="/addProduct">Add Product</Link></h4>
              <h4><Link to="/orders">View Orders</Link></h4>
              <h4><Link to="/analytics">Analytics</Link></h4>
            </div>
          )}
        </div>
      ) : (
        <div>
          {/* Shown before you log in */}
          <h4><Link to="/products">Start Shopping</Link></h4>
          <h4><Link to="/cart">View Cart</Link></h4>
          <h4><Link to="/login">Login</Link></h4>
          <h4><Link to="/signup">Sign Up</Link></h4>
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

