/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Product = db.model('product')

describe('Product routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/products/', () => {
    const kiwi = {
      id: 1,
      title: 'Kiwi',
      description: 'green and yummy',
      photo: 'https://d30y9cdsu7xlg0.cloudfront.net/png/71949-200.png',
      price: 500,
      inventory: 10
    }
    const blueberry = {
      id: 2,
      title: 'Blueberry',
      description: 'blue and yummy',
      photo: 'https://d30y9cdsu7xlg0.cloudfront.net/png/71949-200.png',
      price: 600,
      inventory: 10
    }
    const watermelon = {
      id: 3,
      title: 'Watermelon',
      description: 'red and green and yummy',
      photo: 'https://d30y9cdsu7xlg0.cloudfront.net/png/71949-200.png',
      price: 600,
      inventory: 10
    }

    beforeEach(() => {
      return Product.bulkCreate([kiwi, blueberry, watermelon])
    })

    it('GET /api/products', async () => {
      const res = await request(app)
        .get('/api/products')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(['Kiwi', 'Blueberry', 'Watermelon'].includes(res.body[0].title)).to.equal(true)
      expect(res.body.length).to.equal(3)
    })

    it('GET /api/products/1', async () => {
      const res = await request(app)
        .get('/api/products/1')
        .expect(200)

        expect(res.body).to.be.an('object')
        expect(res.body.title).to.be.equal('Kiwi')
    })
  }) // end describe('/api/users')
}) // end describe('User routes')





