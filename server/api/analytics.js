const router = require('express').Router()
const db = require('../db')
const {Order, User, Product, OrderProducts} = require('../db/models')
module.exports = router

router.get('/ordersByUser', async (req, res, next) => {
  try {
    await db.query(
      'SELECT "userId", "email", count(*) AS orders FROM orders INNER JOIN users ON orders."userId" = users.id GROUP BY "userId", "email" ').spread((results, metadata) => {
      res.status(200).json(results)
    })
  } catch (err) {
    next(err)
  }
})

router.get('/productsByUnitsPurchased', async (req, res, next) => {
  try {
    await db.query(
      'SELECT "id", "title", count(*) AS "unitsPurchased" FROM products INNER JOIN order_products ON products.id = order_products."productId" GROUP BY "id", "title" ').spread((results, metadata) => {
      res.status(200).json(results)
    })
  } catch (err) {
    next(err)
  }
})

router.get('/revenueByMonth', async (req, res, next) => {
  try {
    await db.query(
      'SELECT extract("month" from "createdAt") AS month, count(*) AS orders FROM orders GROUP BY extract(month from "createdAt") ').spread((results, metadata) => {
      res.status(200).json(results)
    })
  } catch (err) {
    next(err)
  }
})


