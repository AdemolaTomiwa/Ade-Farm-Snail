import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import productRoute from './routes/productRoute.js';
import userRoute from './routes/userRoute.js';
import orderRoute from './routes/orderRoute.js';
// import passwordResetRoute from './routes/passwordReset.js';
import uploadRoute from './routes/uploadRoute.js';
import path from 'path';

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
app.use('/api/users', userRoute);
app.use('/api/orders', orderRoute);
app.use('/api/uploads', uploadRoute);
// app.use('/api/password-reset', passwordResetRoute);

const __dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
   app.use(express.static(path.join(__dirname, '/frontend/build')));

   app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
   );
} else {
   app.get('/', (req, res) => {
      res.send('API is running...');
   });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
