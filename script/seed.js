'use strict'

const db = require('../server/db')
const {User, Product, Category, Order, OrderProducts} = require('../server/db/models')

/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!
  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123', admin: true})
  ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)

  // Products
  const mango = await Product.create({
    title: 'Mango',
    description: 'insert description here',
    price: 500,
    inventory: 10,
    photo: "http://www.sqm.com/portals/0/img/fotos_200x200px/mango.jpg"
  })

  const apple = await Product.create({
    title: 'Apple',
    description: 'insert description here',
    price: 500,
    inventory: 10,
    photo: "https://newenglandapples.files.wordpress.com/2014/10/gala.png"
  })

  const grapefruit = await Product.create({
    title: 'Grapefruit',
    description: 'insert description here',
    price: 500,
    inventory: 10,
    photo: "http://3.bp.blogspot.com/-W2cGr1NIb0s/TimfQiQbWWI/AAAAAAAAAHA/1Yl3zPK8cYM/s200/grapefruit.jpg"
  })

  const pineapple = await Product.create({
    title: 'Pineapple',
    description: 'insert description here',
    price: 500,
    inventory: 10,
    photo: "https://parent.guide/wp-content/uploads/2014/07/Pineapple-small-image.jpg"
  })

  const peach = await Product.create({
    title: 'Peach',
    description: 'insert description here',
    price: 500,
    inventory: 10,
    photo: "https://images.parents.mdpcdn.com/sites/parents.com/files/styles/width_200/public/images/550_101735284.jpg"

  })

  // Categories
  const stonefruit = await Category.create({
    title: 'Stone fruit',
    description: 'I have a pit!'
  })

  const citrus = await Category.create({
    title: 'Citrus',
    description: `I'm tarty!`
  })

  const tropical = await Category.create({
    title: 'Tropical',
    description: `I love warm weather!`
  })

  const classic = await Category.create({
    title: 'Classic',
    description: `I'm a childhood favorite!`
  })

  await Promise.all([
    stonefruit.addProducts([mango, peach]),
    citrus.addProduct(grapefruit),
    tropical.addProducts([mango, pineapple]),
    classic.addProduct(apple)
  ])

  // Orders

  const order1 = await Order.create({
    userId: 1,
    isComplete: true,
    totalPrice: 100
  })

  const order2 = await Order.create({
    userId: 1,
    isComplete: false,
    totalPrice: 200
  })

  const order3 = await Order.create({
    userId: 2,
    isComplete: true,
    totalPrice: 300
  })

  const order4 = await Order.create({
    userId: 2,
    isComplete: true,
    totalPrice: 400
  })

  const order5 = await Order.create({
    userId: 2,
    isComplete: false,
    totalPrice: 500
  })

  const bulkOrders = await Order.bulkCreate([
    {
      userId: 2,
      isComplete: false,
      totalPrice: 10,
      createdAt: '2018-06-30 12:16:19.232-04'
    },
    {
      userId: 2,
      isComplete: false,
      totalPrice: 1000,
      createdAt: '2018-06-31 12:16:19.232-04'

    },
    {
      userId: 1,
      isComplete: false,
      totalPrice: 700,
      createdAt: '2018-04-01 12:16:19.232-04'

    },
    {
      userId: 2,
      isComplete: false,
      totalPrice: 100,
      createdAt: '2018-04-30 12:16:19.232-04'
    },
    {
      userId: 2,
      isComplete: false,
      totalPrice: 10,
      createdAt: '2018-03-30 12:16:19.232-04'
    },
    {
      userId: 2,
      isComplete: false,
      totalPrice: 150,
      createdAt: '2018-02-31 12:16:19.232-04'

    },
    {
      userId: 1,
      isComplete: false,
      totalPrice: 700,
      createdAt: '2018-05-01 12:16:19.232-04'

    },
    {
      userId: 2,
      isComplete: false,
      totalPrice: 100,
      createdAt: '2018-05-30 12:16:19.232-04'
    },
  ])


  // OrderProducts entries
  const bulkOrderProducts = await OrderProducts.bulkCreate([
    {
      quantity: 1,
      unitPrice: 100,
      orderId: 1,
      productId: 3
    },
    {
      quantity: 2,
      unitPrice: 100,
      orderId: 2,
      productId: 5
    },
    {
      quantity: 3,
      unitPrice: 100,
      orderId: 3,
      productId: 4
    },
    {
      quantity: 1,
      unitPrice: 100,
      orderId: 4,
      productId: 3
    },
    {
      quantity: 2,
      unitPrice: 150,
      orderId: 4,
      productId: 2
    },
    {
      quantity: 3,
      unitPrice: 100,
      orderId: 5,
      productId: 2
    },
    {
      quantity: 1,
      unitPrice: 200,
      orderId: 5,
      productId: 3
    },
    {
      quantity: 3,
      unitPrice: 100,
      orderId: 5,
      productId: 1
    },
    {
      quantity: 1,
      unitPrice: 10,
      orderId: 6,
      productId: 4
    },
    {
      quantity: 3,
      unitPrice: 100,
      orderId: 7,
      productId: 1
    },
    {
      quantity: 1,
      unitPrice: 500,
      orderId: 7,
      productId: 3
    },
    {
      quantity: 1,
      unitPrice: 200,
      orderId: 7,
      productId: 4
    },
    {
      quantity: 1,
      unitPrice: 700,
      orderId: 8,
      productId: 3
    },
    {
      quantity: 1,
      unitPrice: 100,
      orderId: 9,
      productId: 4
    },
    {
      quantity: 1,
      unitPrice: 10,
      orderId: 10,
      productId: 5
    },
    {
      quantity: 1,
      unitPrice: 150,
      orderId: 11,
      productId: 4
    },
    {
      quantity: 1,
      unitPrice: 700,
      orderId: 12,
      productId: 3
    },
    {
      quantity: 1,
      unitPrice: 100,
      orderId: 13,
      productId: 3
    },
  ])



  console.log('Success! Product database is seeded!')
}


// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
