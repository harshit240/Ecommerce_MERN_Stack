require('dotenv').config({ path: './env' })
const stripe = require('stripe')('sk_test_51MyeBpSGI7sI3pErcoZpq5mnlsoq1HVgY2pqBKgkJSy1nPZnDFiLqC4nBXx5BUT6ADb2ldh1kDT7P7Ic0KudaD5300yDWwFQxi');
class PaymentController {
    static processPayment = async (req, res) => {
        const mypayment = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: "inr",
            metadata: {
                company: "Your Shop"
            }
        })
        console.log(mypayment)
        res.status(200).json({
            success: true,
            client_secret: mypayment.client_secret
        })
    }
    static sendStripeApiKey = async (req, res) => {
        res.status(200).json({
            stripeApiKey: process.env.STRIPE_API_KEY
        })
    }
}
module.exports = PaymentController;