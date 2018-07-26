/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const OrderProducts = db.model('order_products')
const Order = db.model('order')
const User = db.model('user')
const Product = db.model('product')

describe('OrderProducts model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('model attributes', () => {
    let cody, order, product, row

    const watermelon = {
      id: 1,
      title: 'Watermelon',
      description: 'red and green and yummy',
      photo: 'https://d30y9cdsu7xlg0.cloudfront.net/png/71949-200.png',
      price: 600,
      inventory: 10
    }

    beforeEach(
      async () => {
      // create a user
        cody = await User.create({
          email: 'cody@puppybook.com',
          password: 'bones'
        })
      // create an order
        order = await Order.create({
          userId: 1
        })
      // create a product
          product = await Product.create(watermelon)
      // create an order_products row
        row = await OrderProducts.create({
          orderId: 1,
          productId: 1,
          quantity: 2,
          unitPrice: 600
        })
      }
  )

    it('has the correct attributes', () => {
      expect(row.quantity).to.equal(2)
      expect(row.unitPrice).to.equal(watermelon.price)
      expect(row.productId).to.equal(watermelon.id)
      expect(row.orderId).to.equal(order.id)
    })
  })
})
