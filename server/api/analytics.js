const router = require('express').Router()
const db = require('../db')
const {Order, User, Product, OrderProducts} = require('../db/models')
module.exports = router

router.get('/ordersByUser', async (req, res, next) => {
  try {
    await db.query('SELECT "userId", count(*) FROM ORDERS GROUP BY "userId"').spread((results, metadata) => {
      console.log(results)
      res.status(200).json(results)
    })
  } catch (err) {
    next(err)
  }
})


