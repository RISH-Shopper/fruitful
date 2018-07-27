/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Order = db.model('order')
const OrderProducts = db.model('order_products')


//Orders

// const order1 = await Order.create({
//   userId: 1,
//   isComplete: true,
// })

// const order2 = await Order.create({
//   userId: 1,
//   isComplete: false,
// })


// // OrderProducts entries
// const orderProduct1 = await OrderProducts.create({
//   quantity: 5,
//   unitPrice: 400,
//   orderId: 1,
//   productId: 2
// })

// const orderProduct2 = await OrderProducts.create({
//   quantity: 3,
//   unitPrice: 300,
//   orderId: 1,
//   productId: 3
// })

describe('/api/orders/', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('Order routes', () => {

    beforeEach(() => {
      return Order.bulkCreate([kiwi, blueberry, watermelon])
    })

    it('serves up all products using GET /api/products', async () => {
      const res = await request(app)
        .get('/api/products')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(['Kiwi', 'Blueberry', 'Watermelon'].includes(res.body[0].title)).to.equal(true)
      expect(res.body.length).to.equal(3)
    })

    it('serves up a single product using GET /api/products/1', async () => {
      const res = await request(app)
        .get('/api/products/1')
        .expect(200)

        expect(res.body).to.be.an('object')
        expect(res.body.title).to.be.equal('Kiwi')
    })
