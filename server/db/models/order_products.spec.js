/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const OrderProducts = db.model('order_products')

describe('OrderProducts model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('model attributes', () => {
    let row
    beforeEach(
      // create a product

      // create an order

      // create an order_products row
      async () => {
        row = await OrderProducts.create({
          orderId: 1,
          productId: 1,
          quantity: 1,
          unitPrice: 100
        })
      }

  )

    xit('has a quantity attribute', () => {
      expect(row.quantity).to.equal(1)
    })
  })
})
