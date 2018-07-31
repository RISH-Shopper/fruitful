import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, user} = props
  console.log("USERPROPS", props)
  return (
    <div>
      <h3>Welcome, {email}</h3>
      <div>
        <h2><Link to="/home/orders">My Orders</Link></h2>
        <h2><Link to="/products">Continue Shopping</Link></h2>
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
