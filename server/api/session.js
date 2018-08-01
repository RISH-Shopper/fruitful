const router = require('express').Router()
const {Order} = require('../db/models')
module.exports = router

//1. create order by grabbing userId && total price
//2. bulk create the order-products table with that orderID and
//price and quantity of each product (by productId) that is on state
//in our Thunk:
// OrderProducts.bulkCreate([{orderId: 1, productId: 1, quantity: 2, price: 500}, etc, etc])

// get cart from req.session
router.get('/', (req, res, next) => {
  try {
    const cart = req.session.cart ? req.session.cart : {items: {}}
    res.status(200).json(cart)
  } catch (err) {
    next(err)
  }
})

// add cart to req.session
router.post('/', (req, res, next) => {
  try {
    req.session.cart = req.body.cart
    res.status(201).json(req.session.cart)
  } catch (err) { next(err) }
})



