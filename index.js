import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import stripeRoutes from "./stripe-integration/server.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(join(__dirname, 'stripe-integration')));

// Mount Stripe integration routes
app.use("/stripe", stripeRoutes);

// Define your API routes
app.get('/api', (req, res) => res.json({ message: 'My API Running :)' }));

// Start the server
app.listen(5001, () => console.log('API running on port 5001'));
