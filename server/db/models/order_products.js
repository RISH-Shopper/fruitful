const Sequelize = require('sequelize')
const db = require('../db')

const OrderProducts = db.define('order_products', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  unitPrice: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = OrderProducts
