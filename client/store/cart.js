import axios from 'axios'

const ADD_PRODUCT = 'ADD_PRODUCT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
const EMPTY_CART = 'EMPTY_CART'
const INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY'
const DECREASE_PRODUCT_QUANTITY = 'DECREASE_PRODUCT_QUANTITY'



const initialState = {
	cartItems: [],
	totalCartPrice: 0,
	totalCartQuantity: 0
}

export const addProduct = product => ({type: ADD_PRODUCT, product})

export const removeProduct = product => ({type: REMOVE_PRODUCT, productId: product.id })

export const emptyCart = () => ({ type: EMPTY_CART, cartItems:[] })

export const increaseProductQuantity = product => ({ type: INCREASE_PRODUCT_QUANTITY, productId: product.id})

export const decreaseProductQuantity = product => ({ type: DECREASE_PRODUCT_QUANTITY, productQuantity : product.quantity})

export default function(state = initialState, action){
	let cartItems, item
	switch (action.type){
		case ADD_PRODUCT:
			cartItems = state.cartItems
			cartItems.push(action.product)
			return {
				...state, cartItems
			}
		case REMOVE_PRODUCT:
			cartItems = state.cartItems.filter(product => product.id != action.productId)
			return {
				...state, cartItems
			}
		case emptyCart:
			return {
				...state,
				cartItems: action.cartItems
			}
		case INCREASE_PRODUCT_QUANTITY:
			item = state.cartItems.find(product => product.id == action.productId)
			item.quantity++
			cartItems = state.cartItems.filter(product => product.id != action.productId)
			cartItems.push(item)

			return {
			 ...state, cartItems
			}

		case DECREASE_PRODUCT_QUANTITY:
			return {

			}
		default:
		return state
	}
}
