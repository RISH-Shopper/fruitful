import axios from 'axios'

/**
 * ACTION TYPES
 */
export const GET_ORDERS = 'GET_ORDERS'
export const GET_ORDER = 'GET_ORDER'

/**
 * INITIAL STATE
 */

const initialState = {
  orders: [],
  singleOrder: []
}

/**
 * ACTION CREATORS
 */

export const getOrders = (orders) => ({
  type: GET_ORDERS,
  orders
})

export const getOrder = (order) => ({
  type: GET_ORDER,
  order
})


/**
 * THUNK CREATORS
 */
 export const fetchOrders = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/orders')
      const action = getOrders(data)
      dispatch(action)
    }
    catch (err) {
      console.log(err)
    }
  }
}

export const fetchOrder = (orderId) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/orders/${orderId}`)
      const action = getOrder(data)
      dispatch(action)
    } catch (err) {
      console.log(err)
    }
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ORDERS:
      return { ...state, orders: action.orders }
    case GET_ORDER:
      return { ...state, singleOrder: action.order }
    default:
      return state
  }
}
