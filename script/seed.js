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
    User.create({email: 'murphy@email.com', password: '123'}),
    User.create({email: 'rebecca@fruitful.com', password: '123', admin: true}),
    User.create({email: 'hawa@fruitful.com', password: '123', admin: true}),
    User.create({email: 'sarah@fruitful.com', password: '123', admin: true}),
    User.create({email: 'isabel@fruitful.com', password: '123', admin: true}),
    User.create({email: 'dan@fruitful.com', password: '123', admin: true}),
    User.create({email: 'john@fruitful.com', password: '123', admin: true})
  ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)

  // Products
  const bananas = await Product.create({
    title: 'Bananas',
    description: 'insert description here',
    price: 249,
    inventory: 20,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbcDw4FobLR9UUmXNAwWmpyziACHNQwXb6ZPgsYsASLiE-li1dgQ"
  })

  const strawberries = await Product.create({
    title: 'Strawberries',
    description: 'insert description here',
    price: 399,
    inventory: 20,
    photo: "https://media.istockphoto.com/photos/strawberry-picture-id513590708?k=6&m=513590708&s=612x612&w=0&h=bt6vD_Ujv3bqRqqBtJQsNJQANxsjWzvDph6h6Kx4xtM="
  })

  const blueberries = await Product.create({
    title: 'Blueberries',
    description: 'insert description here',
    price: 499,
    inventory: 20,
    photo: "https://images-na.ssl-images-amazon.com/images/I/41LnV22OsiL._SX355_.jpg"
  })

  const peaches = await Product.create({
    title: 'Peaches',
    description: 'insert description here',
    price: 129,
    inventory: 20,
    photo: "https://d1ubpsppdzqxsq.cloudfront.net/image/300s/93/f1/6b/93f16b908b800c99260d29b6c20794d57d5e062e.jpg"
  })

  const lemons = await Product.create({
    title: 'Lemons',
    description: 'insert description here',
    price: 159,
    inventory: 20,
    photo: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/images/lemon-uses-0-1494115921.jpg"
  })

  const redSeedlessGrapes = await Product.create({
    title: 'Red Seedless Grapes',
    description: 'insert description here',
    price: 599,
    inventory: 20,
    photo: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_bf472e46-861d-4fe4-9fbc-8f34c9bb3a98.png"
  })

  const nectarines = await Product.create({
    title: 'Nectarines',
    description: 'insert description here',
    price: 129,
    inventory: 20,
    photo: "http://www.paradisefruit802.com/wp-content/uploads/2016/07/Nectarine.gif"
  })

  const raspberries = await Product.create({
    title: 'Raspberries',
    description: 'insert description here',
    price: 499,
    inventory: 20,
    photo: "https://marulangeneralstore.com/wp-content/uploads/2017/02/Raspberries-Punnet-300x300.jpg"
  })

  const oranges = await Product.create({
    title: 'Oranges',
    description: 'insert description here',
    price: 150,
    inventory: 10,
    photo: "https://i0.wp.com/www.healthfitnessrevolution.com/wp-content/uploads/2016/02/ThinkstockPhotos-494037394.jpg?fit=630%2C558"
  })

  const avocado = await Product.create({
    title: 'Avocado',
    description: 'insert description here',
    price: 599,
    inventory: 10,
    photo: "https://images-na.ssl-images-amazon.com/images/I/51ukRMsmDIL._SY300_QL70_.jpg"
  })

  const mangoes = await Product.create({
    title: 'Mangoes',
    description: 'insert description here',
    price: 419,
    inventory: 20,
    photo: "https://www.fruteriadevalencia.com/wp-content/uploads/2015/02/MANGO-buena.jpg"
  })

  const redGrapefruit = await Product.create({
    title: 'Red Grapefruit',
    description: 'insert description here',
    price: 799,
    inventory: 20,
    photo: "https://www.edenbotanicals.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/g/r/grapefruit_canstockphoto11983829.jpg"
  })

  const pineapple = await Product.create({
    title: 'Pineapple',
    description: 'insert description here',
    price: 419,
    inventory: 10,
    photo: "https://cdn8.bigcommerce.com/s-q51ae6vv/images/stencil/500x659/products/940/3226/FA_Pineapple__96451.1402897272.jpg?c=2&imbypass=on"
  })

  const galaApples = await Product.create({
    title: 'Gala Apples',
    description: 'insert description here',
    price: 149,
    inventory: 10,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntiNZHaOwF7RdDk0UuMujTSLcHuSFm8sl1SQ92bwExOaeximD_A"
  })

  const apricots = await Product.create({
    title: 'Apricots',
    description: 'insert description here',
    price: 190,
    inventory: 10,
    photo: "http://polgarkerteszet.hu/wp-content/uploads/2012/09/canstockphoto686473411.jpg"
  })

  const cherries = await Product.create({
    title: 'Cherries',
    description: 'insert description here',
    price: 598,
    inventory: 10,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmx3_v7X7IJoDYGYNJbrNSCwWJcI39fKJiTAjDbBEvV2848aW5gg"
  })

  const blackberries = await Product.create({
    title: 'Blackberries',
    description: 'insert description here',
    price: 399,
    inventory: 10,
    photo: "https://images.eatthismuch.com/site_media/img/1339_scotjohns_53d85531-4339-4ad7-bb36-46d72850e4e2.png"
  })

  const greenSeedlessGrapes = await Product.create({
    title: 'Green Seedless Grapes',
    description: 'insert description here',
    price: 599,
    inventory: 10,
    photo: "http://www.jackieleonards.ie/wp-content/uploads/2015/03/green-grapes.png"
  })

  const watermelon = await Product.create({
    title: 'Watermelon',
    description: 'insert description here',
    price: 509,
    inventory: 10,
    photo: "https://images.fitpregnancy.mdpcdn.com/sites/fitpregnancy.com/files/styles/width_360/public/field/image/watermelon-wonder-at_0.jpg"
  })

  const grannySmithApples = await Product.create({
    title: 'Granny Smith Apples',
    description: 'insert description here',
    price: 199,
    inventory: 10,
    photo: "https://www.markon.com/sites/default/files/styles/large/public/pi_photos/Apples_Granny_Smith_Hero.jpg"
  })

  const cantaloupe = await Product.create({
    title: 'Cantaloupe',
    description: 'insert description here',
    price: 349,
    inventory: 10,
    photo: "https://foodsafetyblog.statefoodsafety.com/wp-content/uploads/2014/05/20160122_Dollarphotoclub_55601311_cantaloupe-1024x782.jpg"
  })

  const kiwi = await Product.create({
    title: 'Kiwi',
    description: 'insert description here',
    price: 99,
    inventory: 10,
    photo: "http://xwifekitchen.com/wp-content/uploads/2018/02/kiwi.jpeg"
  })

  const goldenKiwi = await Product.create({
    title: 'Golden Kiwi',
    description: 'insert description here',
    price: 149,
    inventory: 10,
    photo: "https://cdn.shopify.com/s/files/1/0206/9470/products/kiwi_gold_1024x1024.jpg?v=1482250186"
  })

  const limes = await Product.create({
    title: 'Limes',
    description: 'insert description here',
    price: 99,
    inventory: 10,
    photo: "https://paradisenursery.com/wp-content/uploads/2014/04/Persian-lime.jpg"
  })

  const fujiApples = await Product.create({
    title: 'Fuji Apples',
    description: 'insert description here',
    price: 169,
    inventory: 10,
    photo: "https://image.made-in-china.com/43f34j00UFQtLPidqDzp/Exported-Chinese-Shandong-Fresh-FUJI-Apple.jpg"
  })

  const plums = await Product.create({
    title: 'Plums',
    description: 'insert description here',
    price: 129,
    inventory: 10,
    photo: "http://www.dljproduce.com/wp-content/uploads/2017/10/Plum_iStock-822420778.jpg"
  })

  const whitePeaches = await Product.create({
    title: 'White Peaches',
    description: 'insert description here',
    price: 149,
    inventory: 10,
    photo: "https://www.naturehills.com/media/catalog/product/cache/d73a5018306142840707bd616a4ef293/w/h/white-lady-peach-tree-6-800x800.jpg"
  })

  const seedlessWatermelon = await Product.create({
    title: 'Seedless Watermelon',
    description: 'insert description here',
    price: 615,
    inventory: 10,
    photo: "https://www.whataboutwatermelon.com/wp-content/uploads/2010/09/seedless2.jpg"
  })

  const rainierCherries = await Product.create({
    title: 'Rainier Cherries',
    description: 'insert description here',
    price: 599,
    inventory: 10,
    photo: "https://images.eatthismuch.com/site_media/img/139485_test_user_6288648c-96da-4e3f-b871-a3249a4bf31e.png"
  })

  const clementines = await Product.create({
    title: 'Clementines',
    description: 'insert description here',
    price: 49,
    inventory: 10,
    photo: "https://nutriliving-images.imgix.net/images/2014/266/1538/D15EB38C-4743-E411-B834-22000AF88B16.jpg?ch=DPR&w=488&h=488&auto=compress,format&dpr=1"
  })

  const passionfruit = await Product.create({
    title: 'Passion Fruit',
    description: 'insert description here',
    price: 449,
    inventory: 10,
    photo: "https://www.selinawamucii.com/wp-content/uploads/2014/08/Selina-Wamucii-Passion-Fruit-300x256.jpg"
  })

  const dragonfruit = await Product.create({
    title: 'Dragonfruit',
    description: 'insert description here',
    price: 419,
    inventory: 10,
    photo: "http://www.tang-freres.fr/wp-content/uploads/produits/fruits/fruit-du-dragon-pitaya.png"
  })

  const coconut = await Product.create({
    title: 'Coconut',
    description: 'insert description here',
    price: 519,
    inventory: 10,
    photo: "http://bodaciousolive.com/wp-content/uploads/2015/12/coconut-1024x842.jpg"
  })

  const mangosteen = await Product.create({
    title: 'Mangosteen',
    description: 'insert description here',
    price: 649,
    inventory: 10,
    photo: "https://cdn.shopify.com/s/files/1/0940/6866/products/shanzhuc-500x500_1024x1024.jpg?v=1467949283"
  })

  const guava = await Product.create({
    title: 'Guava',
    description: 'insert description here',
    price: 448,
    inventory: 10,
    photo: "https://5.imimg.com/data5/RA/LA/MY-46372253/guava-2fperu-500x500.png"
  })


  const papaya = await Product.create({
    title: 'Papaya',
    description: 'insert description here',
    price: 529,
    inventory: 10,
    photo: "https://www.fruttaweb.com/8371-large_default/fresh-papaya-ready-to-eat.jpg"
  })

  const durian = await Product.create({
    title: 'Durian',
    description: 'insert description here',
    price: 499,
    inventory: 10,
    photo: "https://cdn.shopify.com/s/files/1/0940/6866/products/jack-fruit_1024x1024.jpg?v=1464302411"
  })

  const rambutan = await Product.create({
    title: 'Rambutan',
    description: 'insert description here',
    price: 519,
    inventory: 10,
    photo: "https://cdn3.volusion.com/oukqz.sbeju/v/vspfiles/photos/Hawaiian-Rambutan-fruit2-2.gif?1531528582"
  })

  const koreanPear = await Product.create({
    title: 'Korean Pear',
    description: 'insert description here',
    price: 329,
    inventory: 10,
    photo: "https://d1ubpsppdzqxsq.cloudfront.net/image/300s/2c/9d/44/2c9d4474b193dd4b0f7ef635a929afc3c08f8419.jpg"
  })

  const starfruit = await Product.create({
    title: 'Starfruit',
    description: 'insert description here',
    price: 319,
    inventory: 10,
    photo: "https://storage.googleapis.com/drhealthbenefits/2017/05/health-benefits-of-starfruit.jpg"
  })

  const lychee = await Product.create({
    title: 'Lychee',
    description: 'insert description here',
    price: 399,
    inventory: 10,
    photo: "http://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-Lychee.jpg"
  })

  const kumquat = await Product.create({
    title: 'Kumquat',
    description: 'insert description here',
    price: 309,
    inventory: 10,
    photo: "https://exoticfruitbox.com/wp-content/uploads/2015/10/kumquat.jpg"
  })

  const figs = await Product.create({
    title: 'Figs',
    description: 'insert description here',
    price: 509,
    inventory: 10,
    photo: "https://4awcmd1th3m1scfs83pxlvbh-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/figs.jpg"
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

  const berries = await Category.create({
    title: 'Berries',
    description: `I have lots of seeds!`
  })

  const seedless = await Category.create({
    title: 'Seedless',
    description: `I have no seeds!`
  })

  const popular = await Category.create({
    title: 'Popular',
    description: `I'm popular!`
  })

  const specials = await Category.create({
    title: 'Specials',
    description: `I'm special!`
  })

  await Promise.all([
    stonefruit.addProducts([mangoes, peaches, plums, nectarines, whitePeaches, cherries, rainierCherries, apricots, avocado, lychee, rambutan]),
    citrus.addProducts([lemons, oranges, redGrapefruit, limes, clementines]),
    tropical.addProducts([mangoes, pineapple, papaya, coconut, passionfruit, dragonfruit, bananas, avocado, lemons, mangosteen, lychee, kumquat, starfruit, durian, guava, kiwi]),
    classic.addProducts([fujiApples, grannySmithApples, galaApples]),
    berries.addProducts([strawberries, blueberries, blackberries, raspberries]),
    seedless.addProducts([redSeedlessGrapes, greenSeedlessGrapes, seedlessWatermelon]),
    popular.addProducts([bananas, strawberries, blueberries, fujiApples, peaches, lemons, watermelon, lychee]),
    specials.addProducts([mangosteen, dragonfruit, papaya, durian, rambutan, koreanPear, cantaloupe, figs, goldenKiwi])
  ])

// Orders
  const order1 = await Order.create({
    userId: 1,
    isComplete: true,
    totalPrice: 100,
    isShipped: true
  })

  const order2 = await Order.create({
    userId: 1,
    isComplete: true,
    totalPrice: 200
  })

  const order3 = await Order.create({
    userId: 2,
    isComplete: true,
    totalPrice: 300,
    isShipped: true
  })

  const order4 = await Order.create({
    userId: 2,
    isComplete: true,
    totalPrice: 400,
    isShipped: true
  })

  const order5 = await Order.create({
    userId: 2,
    isComplete: true,
    totalPrice: 500
  })

  const bulkOrders = await Order.bulkCreate([
    {
      userId: 2,
      isComplete: true,
      totalPrice: 10,
      isShipped: true,
      createdAt: '2018-06-30 12:16:19.232-04'
    },
    {
      userId: 2,
      isComplete: true,
      totalPrice: 1000,
      createdAt: '2018-06-31 12:16:19.232-04'

    },
    {
      userId: 1,
      isComplete: false,
      totalPrice: 700,
      isShipped: true,
      createdAt: '2018-04-01 12:16:19.232-04'

    },
    {
      userId: 2,
      isComplete: false,
      totalPrice: 100,
      isShipped: true,
      createdAt: '2018-04-30 12:16:19.232-04'
    },
    {
      userId: 2,
      isComplete: true,
      totalPrice: 10,
      createdAt: '2018-03-30 12:16:19.232-04'
    },
    {
      userId: 2,
      isComplete: true,
      totalPrice: 150,
      createdAt: '2018-02-31 12:16:19.232-04'

    },
    {
      userId: 1,
      isComplete: true,
      totalPrice: 700,
      isShipped: true,
      createdAt: '2018-05-01 12:16:19.232-04'

    },
    {
      userId: 2,
      isComplete: true,
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
    }
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
