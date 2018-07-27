const router = require('express').Router()
const {Order, Product, User, OrderProducts} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: User
        }
      ]
    })
    res.status(200).json(orders)
  } catch (err) {
    next(err)
  }
})

router.get('/:orderId', async (req, res, next) => {
  try {
    const orderId = req.params.orderId
    const order = await OrderProducts.findAll({
      where: {
        orderId: orderId
      },
      include: [{
        model: Order,
        include: [{
          model: User
        }]
      }]
 })
    if (!order) {
      const err = new Error('Order not found')
      err.status = 404
      return next(err)
    }
    res.status(200).json(order)
  } catch (err) { next(err) }
})


//how to do the post route?


router.put('/:id', async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id)
    const updatedOrder = await order.update(req.body)
    res.status(202).json(updatedOrder)
  } catch (err) { next(err) }
});
