const router = require('express').Router()
const db = require('../db')
const {Order, User, Product, OrderProducts} = require('../db/models')
module.exports = router

router.get('/ordersByUser', async (req, res, next) => {
  try {
    await db.query(
      'SELECT "userId", "email", CAST(count(*) AS INTEGER) AS orders FROM orders INNER JOIN users ON orders."userId" = users.id GROUP BY "userId", "email" ORDER BY orders asc').spread((results, metadata) => {
      res.status(200).json(results)
    })
  } catch (err) {
    next(err)
  }
})

router.get('/productsByUnitsPurchased', async (req, res, next) => {
  try {
    await db.query(
      'SELECT "id", "title", CAST(count(*) AS INTEGER) AS "unitsPurchased" FROM products INNER JOIN order_products ON products.id = order_products."productId" GROUP BY "id", "title" ORDER BY "unitsPurchased" asc').spread((results, metadata) => {
      res.status(200).json(results)
    })
  } catch (err) {
    next(err)
  }
})

router.get('/ordersByMonth', async (req, res, next) => {
  try {
    await db.query(
      'SELECT CAST(extract("month" from "createdAt") AS INTEGER) AS month, CAST(count(*) AS INTEGER) AS orders FROM orders GROUP BY month ORDER BY month').spread((results, metadata) => {
      res.status(200).json(results)
    })
  } catch (err) {
    next(err)
  }
})

router.get('/revenueByMonth', async (req, res, next) => {
  try {
    await db.query(
      'SELECT extract("month" from "createdAt") AS month, sum("totalPrice") AS revenue FROM orders GROUP BY extract(month from "createdAt") ').spread((results, metadata) => {
      res.status(200).json(results)
    })
  } catch (err) {
    next(err)
  }
})


