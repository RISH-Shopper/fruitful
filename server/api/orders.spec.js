/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Order = db.model('order')
const OrderProducts = db.model('order_products')
const Product = db.model('product')

//Orders

const orders = [
  {
    id: 2,
    isComplete: false,
    isShipped: false,
    createdAt: '2018-07-27T19:39:09.363Z',
    updatedAt: '2018-07-27T19:39:09.363Z'
  },
  {
    id: 3,
    isComplete: true,
    isShipped: false,
    createdAt: '2018-07-27T19:39:09.365Z',
    updatedAt: '2018-07-27T19:39:09.365Z'
  },
  {
    id: 4,
    isComplete: true,
    isShipped: false,
    createdAt: '2018-07-27T19:39:09.369Z',
    updatedAt: '2018-07-27T19:39:09.369Z'
  },
  {
    id: 1,
    isComplete: true,
    isShipped: true,
    createdAt: '2018-07-27T19:39:09.360Z',
    updatedAt: '2018-07-27T21:19:33.137Z'
  },
  {
    id: 5,
    isComplete: false,
    isShipped: true,
    createdAt: '2018-07-27T19:39:09.372Z',
    updatedAt: '2018-07-27T21:20:16.461Z'
  }
]

// // OrderProducts entries

const orderProducts1 = {
  quantity: 5,
  unitPrice: 400,
  createdAt: '2018-07-27T19:39:09.375Z',
  updatedAt: '2018-07-27T19:39:09.375Z',
  orderId: 1,
  productId: 2
}

const orderProducts2 = {
  quantity: 3,
  unitPrice: 300,
  createdAt: '2018-07-27T19:39:09.378Z',
  updatedAt: '2018-07-27T19:39:09.378Z',
  orderId: 1,
  productId: 1
}

const orderProducts3 = {
  quantity: 14,
  unitPrice: 100,
  createdAt: '2018-07-27T19:39:09.381Z',
  updatedAt: '2018-07-27T19:39:09.381Z',
  orderId: 2,
  productId: 1
}

//Products
const products = [
  {
    id: 1,
    title: 'Mango',
    description: 'insert description here',
    price: 500,
    inventory: 10,
    photo: 'http://www.sqm.com/portals/0/img/fotos_200x200px/mango.jpg'
  },
  {
    id: 2,
    title: 'Apple',
    description: 'insert description here',
    price: 500,
    inventory: 10,
    photo: 'https://newenglandapples.files.wordpress.com/2014/10/gala.png'
  }
]

describe('/api/orders/', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('Order routes', () => {
    beforeEach(() => {
      Order.bulkCreate(orders)
    })
    it('serves up all orders using GET /api/orders', async () => {
      const res = await request(app)
        .get('/api/orders')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body.length).to.equal(5)
    })
  })
})

describe('/api/orders/1', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('Order routes', () => {
    beforeEach(async () => {
      await Product.bulkCreate(products)
      await Order.bulkCreate(orders)
      await OrderProducts.create(orderProducts1)
      await OrderProducts.create(orderProducts2)
      await OrderProducts.create(orderProducts3)
    })
    it('serves up a single order using GET /api/orders/:orderId', async () => {
      const res = await request(app)
        .get('/api/orders/1')
        .expect(200)

      expect(res.body).to.be.an('object')
      expect(res.body.id).to.equal(1)
    })
  })
})

describe('/api/orders/1', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('Order routes', () => {
    beforeEach(async () => {
      await Product.bulkCreate(products)
      await Order.bulkCreate(orders)
      await OrderProducts.create(orderProducts1)
      await OrderProducts.create(orderProducts3)
    })

    it('edits an order using PUT /api/orders/:orderId', async () => {
      const res = await request(app)
        .put('/api/orders/1')
        .send({isComplete: true})
        .expect(202)

      expect(res.body).to.be.an('object')
      expect(res.body.isComplete).to.be.equal(true)
    })
  })
})


describe('/api/orders', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('Order routes', () => {
    beforeEach(async () => {
      await Product.bulkCreate(products)
      await Order.bulkCreate(orders)

    })

    it('creates orderProducts instances using POST /api/orders', async () => {
      const res = await request(app)
        .post('/api/orders')
        .send({orderId: 3, productId: 2, quantity: 5, unitPrice: 500}, {orderId: 3, productId: 1, quantity: 50, unitPrice: 500})
        .expect(201)
console.log("RES>BODY", res.body)
      expect(res.body).to.be.an('array')
      expect(res.body[0]).to.be.an('object')
    })
  })
})

