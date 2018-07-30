const router = require('express').Router()
const stripe = require("stripe")(process.env.STRIPE_KEY)
router.use(require("body-parser").text())
const {Order} = require('../db/models')

module.exports = router


router.post("/stripe", async (req, res) => {
  try {
    //need to store final price in database/backend to grab the amount to send via Stripe:
    //find most recent order by the logged in user that is not completed and grab that totalPrice
    let order = await Order.findOne({
      where: {
        userId: req.user.id,
        isComplete: false
      }
    })
    let orderAmount = order.totalPrice

    let {status} = await stripe.charges.create({
      amount: orderAmount,
      currency: "usd",
      description: "An example charge",
      source: req.body
    });

    res.json({status});
  } catch (err) {
    res.status(500).end();
  }
});
