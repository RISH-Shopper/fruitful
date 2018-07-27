/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Product = db.model('product')

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

describe('/api/products/', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('Product routes', () => {

    beforeEach(() => {
      return Product.bulkCreate([kiwi, blueberry, watermelon])
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


    describe('POST /api/products/', () => {

      beforeEach(() => {
        return db.sync({force: true})
      })

      it('creates a product using POST /api/products',
      async () => {
        const res = await request(app)
        .post('/api/products')
        .send(kiwi)
        .expect(201)

        expect(res.body).to.be.an('object')
        expect(res.body.title).to.be.equal('Kiwi')
      })
    })

    describe('PUT /api/products/:productId', () => {

      it('edits a product using PUT /api/products/:productId',
      async () => {
        const res = await request(app)
        .put('/api/products/1')
        .send({description: `I'm new here!`})
        .expect(202)

        expect(res.body).to.be.an('object')
        expect(res.body.description).to.be.equal(`I'm new here!`)
      })
    })

    describe('DELETE /api/products/:productId', () => {

      it('deletes a product using delete /api/products/:productId',
      async () => {

        // Check products before deletion
        const productsBeforeDeletion = await request(app)
        .get('/api/products')

        // delete request to delete product with id of 1
        await request(app)
          .delete('/api/products/1')
          .expect(204)

        // Check products after deletion
        const productsAfterDeletion = await request(app)
          .get('/api/products')

        // Get lengths of product array before and after deletion
        const lengthBefore = productsBeforeDeletion.body.length
        const lengthAfter = productsAfterDeletion.body.length

        // Compare the lengths. After should be one less than before.
        expect(lengthBefore - lengthAfter).to.equal(1)

        // Check to make sure that product 1 is no longer in the products array
        expect(productsAfterDeletion.body.filter(
          product => product.id === 1
        ).length).to.equal(0)
      })
    })
  }) // end describe('product routes')
}) // end describe('/api/products')





