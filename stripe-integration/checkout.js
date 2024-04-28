
// checkout.js

import express from "express";
import stripe from "stripe";

const router = express.Router();
const stripeSecretKey = "pk_test_51P83e1P6PvKwfzD6NCXxbOG8wdAhL8bb3kHWu79LSqLmaDL4A5bhrMnUd9rFlaYQWIhXImzYlE4jxwzoeTmtfgTm00cLFoLZEJ";
// Initialize Stripe with your secret key
const stripeClient = stripe(stripeSecretKey);

router.post("/process-payment", async (req, res) => {
  try {
    // Handle payment processing using Stripe API
    const { paymentIntent } = await stripeClient.paymentIntents.create({
      amount: req.body.amount,
      currency: "usd", // Change currency as needed
      // Other payment details
    });

    // Send response back to client
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error processing payment:", error);
    res.status(500).json({ error: "An error occurred while processing your payment" });
  }
});

export default router;
