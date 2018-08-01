const router = require('express').Router()
const db = require('../db')
module.exports = router

router.get('/ordersByUser', async (req, res, next) => {
  try {
    if (req.user && req.user.admin){
      await db.query(
        'SELECT "userId", "email", CAST(count(*) AS INTEGER) AS orders FROM orders INNER JOIN users ON orders."userId" = users.id WHERE "isComplete" = TRUE GROUP BY "userId", "email" ORDER BY orders asc').spread((results, metadata) => {
        res.status(200).json(results)
      })
    } else res.status(404).send("Admin use only.")
  } catch (err) {
    next(err)
  }
})

router.get('/productsByUnitsPurchased', async (req, res, next) => {
  try {
    if (req.user && req.user.admin){
      await db.query(
        'SELECT "productId", "title", CAST(count(*) AS INTEGER) AS "unitsPurchased" FROM products INNER JOIN order_products ON products.id = order_products."productId" INNER JOIN orders ON order_products."orderId" = orders.id  WHERE "isComplete" = TRUE GROUP BY "productId", "title"  ORDER BY "unitsPurchased" asc').spread((results, metadata) => {
        res.status(200).json(results)
      })
    } else res.status(404).send("Admin use only.")
  } catch (err) {
    next(err)
  }
})

router.get('/ordersByMonth', async (req, res, next) => {
  try {
    if (req.user && req.user.admin){
      await db.query(
        'SELECT CAST(extract("month" from "createdAt") AS INTEGER) AS month, CAST(count(*) AS INTEGER) AS orders FROM orders WHERE "isComplete" = TRUE GROUP BY month ORDER BY month').spread((results, metadata) => {
        res.status(200).json(results)
      })
    } else res.status(404).send("Admin use only.")
  } catch (err) {
    next(err)
  }
})

router.get('/revenueByMonth', async (req, res, next) => {
  try {
    if (req.user && req.user.admin){
      await db.query(
        'SELECT extract("month" from "createdAt") AS month, sum("totalPrice") AS revenue FROM orders WHERE "isComplete" = TRUE GROUP BY extract(month from "createdAt") ').spread((results, metadata) => {
        res.status(200).json(results)
      })
    } else res.status(404).send("Admin use only.")
  } catch (err) {
    next(err)
  }
})


