const router = require('express').Router()
const {Order, User, Product, OrderProducts} = require('../db/models')
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
    const order = await Order.findById(req.params.orderId, {
      include: [
        {
          model: OrderProducts,
          where: {
            orderId: req.params.orderId
          },
          include: Product
        },
        {
          model: User
        }
      ]
    })
    if (!order) {
      const err = new Error('Order not found')
      err.status = 404
      return next(err)
    }
    res.status(200).json(order)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id)
    const updatedOrder = await order.update(req.body)
    res.status(202).json(updatedOrder)
  } catch (err) {
    next(err)
  }
})
