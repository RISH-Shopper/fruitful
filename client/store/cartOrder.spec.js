/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import reducer, {
  addOrder
} from './cartOrder'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import history from '../history'
import {createStore} from 'redux'

// const middlewares = [thunkMiddleware]
// const mockStore = configureMockStore(middlewares)

describe('Reducer for CartOrder', () => {
  it('returns the initial state by default', () => {
    // creates a store (for testing) using your (real) reducer
    const store = createStore(reducer)

    expect(store.getState()).to.be.an('object')
  })
})

describe('reduces on ADD_ORDER action', () => {
  it('adds the new product to the cartItems object (without mutating the previous state)', () => {
    const store = createStore(reducer)
    const order1 = {userId: 1, totalPrice: 500}

    store.dispatch(addOrder(order1))

    const newState = store.getState()

    expect(newState.order.userId).to.be.deep.equal(1)
  })
})










