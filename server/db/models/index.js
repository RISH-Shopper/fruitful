const User = require('./user')
const Product = require('./product')
const Category = require('./category')
const Order = require('./order')
const OrderProducts = require('./order_products')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Product.belongsToMany(Category, {through: 'product_categories'})
Category.belongsToMany(Product, {through: 'product_categories'})

Order.belongsTo(User)
User.hasMany(Order)

Order.belongsToMany(Product, {through: 'order_products'})
Product.belongsToMany(Order, {through: 'order_products'})

OrderProducts.belongsTo(Order)
Order.hasMany(OrderProducts)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Product,
  Category,
  Order,
  OrderProducts
}
