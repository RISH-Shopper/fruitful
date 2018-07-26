import axios from 'axios'

const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
const EMPTY_CART = 'EMPTY_CART'
const INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY'
const DECREASE_PRODUCT_QUANTITY = 'DECREASE_PRODUCT_QUANTITY'

const initialState = {
  cartItems: {},
  totalCartPrice: 0,
  totalCartQuantity: 0
}

export const addProductToCart = product => ({type: ADD_PRODUCT_TO_CART, product})

export const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  productId: product.id
})

export const emptyCart = () => ({type: EMPTY_CART, cartItems: {}})

export const increaseProductQuantity = product => ({
  type: INCREASE_PRODUCT_QUANTITY,
  productId: product.id
})

export const decreaseProductQuantity = product => ({
  type: DECREASE_PRODUCT_QUANTITY,
  productId: product.id
})

export default function(state = initialState, action) {
  let newState = {...state}
  let newCartObj
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:

      // newCartObj = newState.cartItems
      // newCartObj[action.product.id] = action.product
      // newState.cartItems[action.product.id] = action.product
      return {...newState, cartItems: action.product}

    case REMOVE_PRODUCT:
      delete newState.cartItems[action.productId]
      return newState

    case emptyCart:
      return {
        ...state,
        cartItems: action.cartItems
      }
    case INCREASE_PRODUCT_QUANTITY:
      if (newState.cartItems[action.productId]) {
        newState.cartItems[action.productId].quantity += 1
      }
      return newState

    case DECREASE_PRODUCT_QUANTITY:
      if (newState.cartItems[action.productId]) {
        newState.cartItems[action.productId].quantity -= 1
      }
      return newState

    default:
      return state
  }
}
