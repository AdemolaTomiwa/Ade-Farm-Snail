import express from 'express';

import Product from '../models/productModel.js';

const router = express.Router();

// Get all products
// GET @/api/products
// Public
router.get('/', (req, res) => {
   Product.find()
      .sort({ createdAt: -1 })
      .then((product) => res.status(200).json(product))
      .catch((err) => res.status(400).json({ msg: 'An error occured!!!' }));
});

// Get a single products
// GET @/api/products/:id
// Public
router.get('/:id', (req, res) => {
   Product.findById(req.params.id)
      .then((product) => {
         if (product) {
            res.status(200).json(product);
         } else {
            res.status(400).json({ msg: 'Product does not exist!!!' });
         }
      })
      .catch((err) => res.status(400).json({ msg: 'An error occured!!!' }));
});

// Post a product
// POST @/api/products
// Private
router.post('/', (req, res) => {
   const { name, image, description, price, numReviews } = req.body;

   // Validation
   if (!name || !image || !description || !price) {
      return res.status(400).json({ msg: 'Please enter all fields!' });
   }

   //    Create new Product object
   const newProduct = new Product({
      name,
      image,
      description,
      price,
      numReviews,
   });

   //    Save product to Database
   newProduct
      .save()
      .then((product) => res.status(201).json(product))
      .catch((err) => res.status(400).json({ msg: 'An error occured!' }));
});

// Delete a product by id
// DELETE @/api/products/:id
// Private
router.delete('/:id', (req, res) => {
   Product.findById(req.params.id)
      .then((product) => {
         if (product) {
            product
               .remove()
               .then(() => res.status(200).json({ success: true }))
               .catch(() =>
                  res.status(400).json({ msg: 'Product not deleted!' })
               );
         } else {
            res.status(400).json({ msg: 'Product does not exist!!!' });
         }
      })
      .catch((err) => res.status(400).json({ msg: 'Product not deleted!!!' }));
});

export default router;
