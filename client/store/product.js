import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'

/**
 * INITIAL STATE
 */

 // Dan was here ;)

const products = {
  allProducts = [],
  singleProduct = {}
}

/**
 * ACTION CREATORS
 */
const getProducts = products => ({type: GET_PRODUCTS, products})

/**
 * THUNK CREATORS
 */
export const getProducts = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/products');
      const products = response.data;
      const action = gotProductsFromServer(products);
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
export default function(state = products, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products
    default:
      return state
  }
}
