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
    if (!product) {
      const err = new Error('Product not found!')
      err.status = 404
      return next(err)
    }
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
          model: Product
        }]
   })
   if (!eagerLoading) {
    const err = new Error('Category not found!')
    err.status = 404
    return next(err)
  }
   const results = eagerLoading.products
    res.json(results)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body)
    res.status(201)
    res.send(newProduct)
  } catch (err){next(err);}
})


router.put('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product){
      res.send(404);
    }
    await product.update(req.body);
    res.send(product);
  } catch (err) {next(err);}
});



