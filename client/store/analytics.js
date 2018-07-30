import axios from 'axios'

/**
 * ACTION TYPES
 */
export const GET_ORDERS_BY_USER = 'GET_ORDERS_BY_USER'

/**
 * INITIAL STATE
 */

const initialState = {
  ordersByUser: []
}

/**
 * ACTION CREATORS
 */

export const getOrdersByUser = (orders) => ({
  type: GET_ORDERS_BY_USER,
  orders
})



/**
 * THUNK CREATORS
 */
 export const fetchOrdersByUser = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/analytics/ordersByUser')
      const action = getOrdersByUser(data)
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
    case GET_ORDERS_BY_USER:
      return { ...state, ordersByUser: action.orders}
    default:
      return state
  }
}
