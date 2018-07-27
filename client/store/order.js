import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ORDERS = 'GET_ORDERS'
const GET_ORDER = 'GET_ORDER'

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
    catch (error){
      console.log(error)
    }
  };
};


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
