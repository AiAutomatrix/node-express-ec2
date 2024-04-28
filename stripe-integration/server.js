
// server.js

import express from "express";
import stripePackage from "stripe";
import checkoutRoutes from "./checkout.js";

const app = express();
const stripeSecretKey = "sk_test_51P83e1P6PvKwfzD6K78Hmz0veFT8QC1umgWZIT2xSLesAG9BON8UhUnT3g8p90KsVDUtOlf7sV1t6S6RWgNOyDZH00B2eIlB4A"; // Replace 'sk_test_...' with your actual test secret key

// Initialize Stripe with your secret key
const stripe = stripePackage(stripeSecretKey);

// Set up middleware to make 'stripe' accessible to the routers
app.use((req, res, next) => {
  req.stripe = stripe;
  next();
});

// Mount checkout routes
app.use("/checkout", checkoutRoutes);

// Other middleware and routes...

export default app;
