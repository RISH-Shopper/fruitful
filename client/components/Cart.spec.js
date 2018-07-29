import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Cart from './Cart'
import configureStore from 'redux-mock-store'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Cart', () => {
	let cart
	const numberOfApples = 3
	const numberOfMangoes = 2
	const mangoId = 1
	const appleId = 2
	const mangoUnitPrice = 1
	const appleUnitPrice = 2
	const initialState = {
		products: {
			products: [
				{
					id: 1,
					title: 'Mango',
					photo: 'url_to_mango_picture',
					price: mangoUnitPrice * 100
				},
				{
					id: 2,
					title: 'Apple',
					photo: 'url_to_apple_picture',
					price: appleUnitPrice * 100
				},
				{
					id: 3,
					title: 'Pineapple',
					photo: 'url_to_pineapple_picture',
					price: 2
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

	const mockStore = configureStore();
	const store = mockStore(initialState)

	beforeEach(() => {
		cart = shallow(<Cart store={store} />).dive()
	})

	it('it displays every product that is in the cart', () => {
		const productItems = cart.find('.product-item')
		expect(productItems).to.have.length(2)

		expect(productItems.at(0).text()).to.contain('Mango')
		expect(productItems.at(0).text()).to.contain(`Unit Price: $${mangoUnitPrice}.00`)
		expect(productItems.at(0).text()).to.contain(`quantity: ${numberOfMangoes}`)

		expect(productItems.at(1).text()).to.contain('Apple')
		expect(productItems.at(1).text()).to.contain(`Unit Price: $${appleUnitPrice}.00`)
		expect(productItems.at(1).text()).to.contain(`quantity: ${numberOfApples}`)
	})

	it('displays the total number of items', () => {
		expect(cart.find('.total-number-items').text()).to.equal(`Total number of items: ${numberOfMangoes + numberOfApples}`)
	})

	it('displays the total cost', () => {
		expect(cart.find('.total-cost').text()).to.equal(`Total cost: $${numberOfMangoes * mangoUnitPrice  + numberOfApples * appleUnitPrice }.00`)
	})
})
