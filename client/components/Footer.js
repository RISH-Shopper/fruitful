import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import Search from './Search'

const Footer = () => (
  <div>
  <div className="footer">
    <img src="favicon.ico"/>
    <div>Created by the Fruitful team at Grace Hopper Academy, NYC</div>
  </div>
  </div>
)


export default Footer
