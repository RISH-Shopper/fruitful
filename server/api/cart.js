const router = require('express').Router()
const {Order} = require('../db/models')
module.exports = router

//1. create order by grabbing userId (only need userId to create an order)
//2. bulk create the order-products table with that orderID and
//price and quantity of each product (by productId) that is on state
//in our Thunk:
// OrderProducts.bulkCreate([{orderId: 1, productId: 1, quantity: 2, price: 500}, etc, etc])

router.post('/', async (req, res, next) => {
  try {
    const newOrder = await Order.create(req.body)
    res.status(201).json(newOrder)
  } catch (err) { next(err) }
})



