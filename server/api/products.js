const router = require('express').Router()
const {Product, User, Category} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    console.log('starting all products api call')
    const products = await Product.findAll()
    res.json(products)
  } catch (err) {
    next(err)
  }
})

router.get('/:productId', async (req, res, next) => {
  try {
    console.log('starting single products api call')
    const id = req.params.productId
    const product = await Product.findById(id)
    res.json(product)
  } catch (err) {
    next(err)
  }
})

router.get('/categories/:categoryId', async (req, res, next) => {
  try {
    const id = req.params.categoryId
    console.log('starting category api call for categoryId',id)
    const eagerLoading = await Category.find({
        where: {id: id},
        include: [{
          model: Product,
          // through: { where: {productId: 1}},
          // attributes: ['title']
        }]
   })
   const results = eagerLoading.products
    res.json(results)
  } catch (err) {
    next(err)
  }
})






