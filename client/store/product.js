import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_PRODUCTS = 'SET_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'

/**
 * INITIAL STATE
 */

 // Dan was here ;)

const initialState = {
  products: []
}

/**
 * ACTION CREATORS
 */
export const setProducts = products => ({type: SET_PRODUCTS, products})

export const addProduct = product => ({type: ADD_PRODUCT, product})

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

export const createProduct = (product, history) => {
    return async (dispatch) => {
      const {data} = await axios.post('/api/products', product)
      const action = addProduct(data)
      dispatch(action)
      history.push(`/products/${data.id}`)
    }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {...state, products: action.products}
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.product]}
    default:
      return state
  }
}
