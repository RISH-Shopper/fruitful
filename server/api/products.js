const router = require('express').Router()
const {Product, User, Category} = require('../db/models')
module.exports = router



router.get('/', async (req, res, next) => {
  try {
    console.log('starting all products api call')
    const products = await Product.findAll({
      include: [{ model: Category}]
    })
    res.status(200).json(products)
  } catch (err) { next(err) }
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
    res.status(200).json(product)
  } catch (err) { next(err) }
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
    res.status(200).json(results)
  } catch (err) { next(err) }
})

router.post('/', async (req, res, next) => {
  try {
    if (req.user && req.user.admin){
      const newProduct = await Product.create(req.body)
      res.status(201).json(newProduct)
    } else res.status(404).send("Admin use only.")
  } catch (err) { next(err) }
})


router.put('/:productId', async (req, res, next) => {
  try {
    if (req.user && req.user.admin){
      const product = await Product.findById(req.params.productId)
      const updatedProduct = await product.update(req.body)
      res.status(202).json(updatedProduct)
    } else res.status(404).send("Admin use only.")
  } catch (err) { next(err) }
});

router.delete('/:productId', async (req, res, next) => {
  try {
    if (req.user && req.user.admin){
      const product = await Product.findById(req.params.productId)
      if (!product) {
        const err = new Error('Product not found!')
        err.status = 404
        return next(err)
      }
      await product.destroy()
      res.sendStatus(204)
    } else res.status(404).send("Admin use only.")
  } catch (err) { next(err) }
})
