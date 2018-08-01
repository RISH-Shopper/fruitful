import React from 'react'
import {connect} from 'react-redux'
import {removeToast} from '../store/toasts'

class AddtoCartToast extends React.Component {
  constructor() {
    super()

    this.onClick = this.onClick.bind(this)
  }

  onClick(evt) {
    evt.preventDefault()
    this.props.removeToast()
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary btn-lg" onClick={this.onClick}>
          {this.props.toast.text}
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    toast: state.toasts.cartToast
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeToast: () => dispatch(removeToast())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddtoCartToast)
