import axios from 'axios'

/**
 * ACTION TYPES
 */
export const GET_ORDERS = 'GET_ORDERS'

/**
 * INITIAL STATE
 */

const initialState = {
  orders: []
}

/**
 * ACTION CREATORS
 */

export const getOrders = (orders) => ({
  type: GET_ORDERS,
  orders
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


/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ORDERS:
      return { ...state, orders: action.orders }
    default:
      return state
  }
}
