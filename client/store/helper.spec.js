import {expect} from 'chai'
import {cartTotalPrice} from './helper'

const numberOfApples = 3
	const numberOfMangoes = 2
	const mangoId = 1
	const appleId = 2
	const mangoUnitPrice = 100
	const appleUnitPrice = 200
	const state = {
		products: {
			products: [
				{
					id: 1,
					title: 'Mango',
					photo: 'url_to_mango_picture',
					price: mangoUnitPrice
				},
				{
					id: 2,
					title: 'Apple',
					photo: 'url_to_apple_picture',
					price: appleUnitPrice
				},
				{
					id: 3,
					title: 'Pineapple',
					photo: 'url_to_pineapple_picture',
					price: 200
				}
			]
		},
		cart: {
			items: {
				[mangoId]: numberOfMangoes,
				[appleId]: numberOfApples
			}
		}
	}

describe ('cartTotalPrice', ()=> {
	it.only ('return the total price of all items in cart', ()=> {
		expect(cartTotalPrice(state)).to.equal((mangoUnitPrice*numberOfMangoes + appleUnitPrice*numberOfApples)/100)
	})
})

