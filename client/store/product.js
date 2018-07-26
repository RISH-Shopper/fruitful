import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_PRODUCTS = 'SET_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'
const EDIT_PRODUCT = 'EDIT_PRODUCT'

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

export const editProduct = product => ({type: EDIT_PRODUCT, product})

/**
 * THUNK CREATORS
 */
export const getProducts = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/products');
      const action = setProducts(data);
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

export const updateProduct = (product, productId, history) => {
  return async (dispatch) => {
    const {data} = await axios.put(`/api/products/${productId}`, product)
    console.log('DATA-----', data)
    const action = editProduct(data)
    dispatch(action)
    history.push(`/products/${productId}`)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.products }
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.product] }
    case EDIT_PRODUCT:
      console.log('action.product', action.product)
      console.log('state.products', state.products)
      return { ...state, products: [...state.products].map(product => {
        if (product.id === action.product.id) return action.product
        else return product
      }) }
    default:
      return state
  }
}
