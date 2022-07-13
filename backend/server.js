import express from 'express';
import dotenv from 'dotenv';
import productRoute from './routes/productRoute.js';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

// Express body parser
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

// DB Connect
const db = process.env.MONGO_URI;

mongoose
   .connect(db)
   .then(() => console.log('Mongo DB Connected...'))
   .catch(() => console.log('An error occured...'));

// API Routes
app.use('/api/products', productRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
