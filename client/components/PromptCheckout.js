import React, {Component} from 'react'

class PromptCheckout extends Component {
  render () {
    return (
      <div className="overlay">
        <div className="login-wrapper">
          <div className="login-content">
            <a className="close">x</a>
            <h3>Sign in</h3>
              <form method="post" action="login.php">
                <label htmlFor="username">
                    Username:
                    <input type="text" name="username" id="username" placeholder="Username must be between 8 and 20 characters" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$" required="required" />
                </label>
                <label htmlFor="password">
                    Password:
                    <input type="password" name="password" id="password" placeholder="Password must contain 1 uppercase, lowercase and number" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
                </label>
                <button type="submit">Sign in</button>
              </form>
          </div>
        </div>
      </div>
    )
  }
}

export default PromptCheckout
