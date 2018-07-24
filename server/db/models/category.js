const Sequelize = require('sequelize')
const db = require('../db')

const Category = db.define('category', {
  categoryType: {
    type: Sequelize.STRING,
    defaultValue: 'general',
    validate: {
      notEmpty: true
    }
  },
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
  }
})

module.exports = Category
