import React, {Component} from 'react'
export {Login, Signup} from './auth-form'

class PromptCheckout extends Component {
  render () {
    return (
      <div className="overlay" style="display: none;">
        <div className="login-wrapper">
          <div className="login-content">
            <a className="close">x</a>
              <h3>Sign up today!</h3>
                <Signup />
              <h3>Already have an account? Log in below:</h3>
                <Login />
          </div>
        </div>
      </div>
    )
  }
}

export default PromptCheckout
