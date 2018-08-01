import axios from 'axios'

const ADD_ORDER = 'ADD_ORDER'

const initialState = {}

export const addOrder = order => ({
	type: ADD_ORDER,
	receiveOrder: order
})

//thunks
export const createOrder = (order) => {
  return async (dispatch) => {
    try {
      //order is an object with userId and totalCost
      const response = await axios.post('/api/cart', order)
      const newOrder = response.data
      dispatch(addOrder(newOrder))
    } catch (err) {
      console.log(err)
    }
  }
}

export const updateOrder = (order) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/api/orders/${order.id}`, order)
      const updatedOrder = response.data
      dispatch(addOrder(updatedOrder))
    } catch (err) {
      console.log(err)
    }
  }
}

export const addOrderProducts = (ProductswithOrderIdproductIdquantityunitPrice) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/orders', ProductswithOrderIdproductIdquantityunitPrice)
      const addedOrderProducts = response.data
      dispatch(addOrder(addedOrderProducts))
    } catch (err) {
      console.log(err)
    }
  }
}

export default function(state = initialState, action) {
  switch (action.type) {

    case ADD_ORDER:
      return {...state, order: action.receiveOrder}
    default:
      return state
  }
}
