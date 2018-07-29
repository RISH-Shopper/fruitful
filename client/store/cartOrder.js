import axios from 'axios'

const ADD_ORDER = 'ADD_ORDER'


const initialState = {}

export const addOrder = order => ({
	type: ADD_ORDER,
	receiveOrder: order
})

//thunk
export const createOrder = (order) => {
  return async (dispatch) => {
    try {
      //order is an object with userId and totalCost
      const response = await axios.post('/api/cart', order)
      const newOrder = response.data
      console.log("NEWORDER", newOrder)
      console.log("DISPATCH", dispatch(addOrder(newOrder)))
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
