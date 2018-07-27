import axios from 'axios'

const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART'
const EMPTY_CART = 'EMPTY_CART'
const INCREMENT_PRODUCT_QUANTITY = 'INCREMENT_PRODUCT_QUANTITY'
const DECREMENT_PRODUCT_QUANTITY = 'DECREMENT_PRODUCT_QUANTITY'

const initialState = {
	items: {}
}

//let's have the cart hold id: quantity
//ex: items = {id1: qt1, id2:qty2}

// keeps us from having to store products on store
//will make it simpler to manipulate cart objects

export const addProductToCart = productIdAndQuantity => ({
	type: ADD_PRODUCT_TO_CART,
	productIdAndQuantity
})

//would remove all quantity of particular product
export const removeProductfromCart = productId => ({
	type: REMOVE_PRODUCT_FROM_CART,
	productId
})

export const emptyCart = () => ({type: EMPTY_CART})

export const incrementProductQuantity = productId => ({
	type: INCREMENT_PRODUCT_QUANTITY,
	productId
})

export const decrementProductQuantity = productId => ({
	type: DECREMENT_PRODUCT_QUANTITY,
	productId
})

export default function(state = initialState, action) {
	let newItems, id, quantity
	switch (action.type) {
		case ADD_PRODUCT_TO_CART:
			id = action.productIdAndQuantity.id
			quantity = parseInt(action.productIdAndQuantity.quantity)
			newItems = Object.assign({}, state.items)

			if (newItems.hasOwnProperty(id)) {
				newItems[id] += quantity
			} else {
				newItems[id] = quantity
			}
			return {...state, items: newItems}

		case REMOVE_PRODUCT_FROM_CART:
			newItems = Object.assign({}, state.items)
			delete newItems[action.productId]
			return {...state, items: newItems}

		case EMPTY_CART:
			return {...state, items: {}}

		case INCREMENT_PRODUCT_QUANTITY:
			id = action.productId
			newItems = Object.assign({}, state.items)

			if (newItems.hasOwnProperty(id)) {
				newItems[id]++
			} else {
				newItems[id] = 1
			}
			return {...state, items: newItems}

		case DECREMENT_PRODUCT_QUANTITY:
			id = action.productId
			newItems = Object.assign({}, state.items)

			if (newItems.hasOwnProperty(id)) {
				newItems[id]--

				if (newItems[id] < 0) {
					newItems[id] = 0
				}
			}
			return {...state, items: newItems}

		default:
			return state
	}
}
