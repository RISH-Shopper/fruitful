const router = require('express').Router()
const stripe = require("stripe")("sk_test_a5axcUZ4lh8ObzYWMSXsZICh")
router.use(require("body-parser").text())
const {Order} = require('../db/models')

module.exports = router


router.post("/stripe", async (req, res) => {
  try {
    //find most recent order that is not complete by the logged in user
    let order = await Order.findOne({
      where: {
        userId: req.user.id,
        isComplete: false
      }
    })
    let orderAmount = order.totalPrice
    console.log("REQ_USER: ", req.user.id) //the id of the logged-in user

    //need to store final price in database/backend to grab the amount to send to Stripe to charge
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
