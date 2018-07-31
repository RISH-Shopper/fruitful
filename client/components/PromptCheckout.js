import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class PromptCheckout extends Component {
  render () {
    return (
      <div className="overlay">
        <div className="login-wrapper">
          <div className="login-content">
            <Link to="/cart" className="close">x</Link>
              <div>
                <Link to="/signup">
                    <button type="button">Sign up today!</button>
                </Link>
              </div>
              <div>
                <Link to="/login">
                    <button type="button">Login</button>
                </Link>
              </div>
              <div>
                <Link to="/cart">
                    <button type="button">Return to cart</button>
                </Link>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PromptCheckout
