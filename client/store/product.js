import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_PRODUCTS = 'SET_PRODUCTS'

/**
 * INITIAL STATE
 */

 // Dan was here ;)

const initialState = {}

/**
 * ACTION CREATORS
 */
const setProducts = products => ({type: SET_PRODUCTS, products})

/**
 * THUNK CREATORS
 */
export const getProducts = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/products');
      const products = response.data;
      const action = setProducts(products);
      dispatch(action);
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
    case SET_PRODUCTS:
      return {...state, products: action.products}
    default:
      return state
  }
}
