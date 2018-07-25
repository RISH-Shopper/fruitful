const router = require('express').Router()
const {Product, User, Category} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    console.log('starting all categories api call')
    const categories = await Category.findAll()
    res.json(categories)
  } catch (err) {
    next(err)
  }
})

router.get('/:categoryId', async (req, res, next) => {
  try {
    console.log('starting single category api call')
    const id = req.params.categoryId
    const category = await Category.findById(id)
    if (!category) {
      const err = new Error('Category not found!')
      err.status = 404
      return next(err)
    }
    res.json(category)
  } catch (err) {
    next(err)
  }
})






