/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Products} from './Products'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Products component', () => {
  let products

  beforeEach(() => {
    products = shallow(<Products />)
  })

  it('renders the title "Products', () => {
    expect(products.find('h1').text()).to.be.equal('PRODUCTS')
  })
})
