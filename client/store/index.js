import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import order from './order'
import products from './product'
import categories from './category'
import cart from './cart'
import cartOrder from './cartOrder'
import analytics from './analytics'
import toasts from './toasts'
import search from './search'

const reducer = combineReducers({user, products, categories, cart, order, cartOrder, analytics, toasts, search})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './product'
export * from './category'
export * from './cart'
export * from './cartOrder'
export * from './order'
export * from './analytics'
export * from './toasts'
export * from './search'
