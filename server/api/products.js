const router = require('express').Router()
const {Product, User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    console.log('trying all products api')
    const products = await Product.findAll()
    res.json(products)
  } catch (err) {
    next(err)
  }
})




