const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  },
  inventory: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  photo: {
    type: Sequelize.STRING,
    defaultValue: `https://d30y9cdsu7xlg0.cloudfront.net/png/71949-200.png`,
    validate: {
      isUrl: true
    }
  }
})

Product.hook('beforeValidate', (product, options) => {
  product.price = (product.price * 100);
});

module.exports = Product
