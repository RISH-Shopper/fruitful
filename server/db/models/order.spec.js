/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Order = db.model('order')
const User = db.model('user')

describe('Order model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('model attributes', () => {
    let order, cody

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
      }

  )

    it('has a userId attribute', () => {
      expect(order.userId).to.equal(1)
    })
  })

  // describe('instanceMethods', () => {
  //   describe('correctPassword', () => {
  //     let cody

  //     beforeEach(async () => {
  //       cody = await User.create({
  //         email: 'cody@puppybook.com',
  //         password: 'bones'
  //       })
  //     })

  //     it('returns true if the password is correct', () => {
  //       expect(cody.correctPassword('bones')).to.be.equal(true)
  //     })

  //     it('returns false if the password is incorrect', () => {
  //       expect(cody.correctPassword('bonez')).to.be.equal(false)
  //     })
    // }) // end describe('correctPassword')
  // }) // end describe('instanceMethods')
}) // end describe('User model')
