/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import reducer, {
  addProductToCart,
  removeProductfromCart,
  emptyCart,
  incrementProductQuantity,
  decrementProductQuantity
} from './cart'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import history from '../history'
import {createStore} from 'redux'

// const middlewares = [thunkMiddleware]
// const mockStore = configureMockStore(middlewares)

describe('Reducer for Cart', () => {
  it('returns the initial state by default', () => {
    // creates a store (for testing) using your (real) reducer
    const store = createStore(reducer)

    expect(store.getState()).to.be.an('object')
  })
})

describe('reduces on ADD_PRODUCT_TO_CART action', () => {
  it('adds the new product to the cartItems object (without mutating the previous state)', () => {
    const store = createStore(reducer)
    const product1 = {id: 1, quantity: 5}
    const product2 = {id: 2, quantity: 3}

    store.dispatch(addProductToCart(product1))
    store.dispatch(addProductToCart(product2))

    const newState = store.getState()
    //newState { items: { '1': 5, '2': 3 } }

    expect(newState.items[1]).to.be.deep.equal(5)
    expect(newState.items[2]).to.be.deep.equal(3)
  })
})

describe('reduces on REMOVE_PRODUCT_FROM_CART action', () => {
  it('removes a product from the cartItems object (without mutating the previous state)', () => {
    const store = createStore(reducer)

    const product1 = {id: 1, quantity: 5}
    const product2 = {id: 2, quantity: 3}

    store.dispatch(addProductToCart(product1))
    store.dispatch(addProductToCart(product2))

    store.dispatch(removeProductfromCart(product1.id))

    const newState = store.getState()

    expect(newState.items[1]).to.be.deep.equal(undefined)
    expect(newState.items[2]).to.be.deep.equal(3)
  })
})

describe('reduces on EMPTY_CART action', () => {
  it('removes all products from the cartItems object (without mutating the previous state)', () => {
    const store = createStore(reducer)

    const product = {id: 1, quantity: 5}
    store.dispatch(addProductToCart(product))
    store.dispatch(emptyCart())

    const newState = store.getState()

    expect(newState.items[1]).to.be.deep.equal(undefined)
  })
})

describe('reduces on INCREMENT_PRODUCT_QUANTITY action', () => {
  it('increases the quantity by 1 of a specific product in the cartItems object (without mutating the previous state)', () => {
    const store = createStore(reducer)

    const product = {id: 1, quantity: 5}
    store.dispatch(addProductToCart(product))
    store.dispatch(incrementProductQuantity(product.id))

    const newState = store.getState()

    expect(newState.items[1]).to.be.deep.equal(6)
  })
})

describe('reduces on DECREMENT_PRODUCT_QUANTITY action', () => {
  it('decreases the quantity by 1 of a specific product in the cartItems object (without mutating the previous state)', () => {
    const store = createStore(reducer)

    const product = {id: 1, quantity: 5}
    store.dispatch(addProductToCart(product))
    store.dispatch(decrementProductQuantity(product.id))

    const newState = store.getState()
    //newState= items: {'1': 4}

    expect(newState.items[1]).to.be.deep.equal(4)
  })
})
