import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

import Token from '../models/tokenModel.js';
import sendEmail from '../middleware/sendEmail.js';

const router = express.Router();

import User from '../models/userModel.js';

// Get all Users
// GET @/api/users
// Private
router.get('/', (req, res) => {
   User.find()
      .sort({ createdAt: -1 })
      .then((user) => res.status(200).json(user))
      .catch(() => res.status(400).json({ msg: 'An error occured!' }));
});

// Create a new User
// POST @/api/users
// Public
router.post('/', (req, res) => {
   const { firstName, lastName, email, password, isAdmin } = req.body;

   User.findOne({ email }).then((user) => {
      if (user) {
         return res
            .status(400)
            .json({ msg: 'User already exist! Please Login!' });
      }

      // Validation
      if (!firstName || !lastName || !email || !password) {
         res.status(400).json({ msg: 'Please enter all fields!' });
      } else if (password.length < 6) {
         res.status(400).json({
            msg: 'Password character should be at least 6 character long!',
         });
      } else {
         // Create new User Object
         const newUser = new User({
            firstName,
            lastName,
            email,
            password,
            isAdmin,
         });

         // Create hash and hash the user password
         bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
               if (err) throw err;
               newUser.password = hash;

               // Save user to DB
               newUser
                  .save()
                  .then((user) => {
                     jwt.sign(
                        { id: user._id },
                        process.env.JWT_SECRET,
                        (err, token) => {
                           if (err) throw err;

                           res.json({
                              token,
                              user: {
                                 id: user._id,
                                 firstName: user.firstName,
                                 lastName: user.lastName,
                                 email: user.email,
                                 isAdmin: user.isAdmin,
                                 verified: user.verified,
                              },
                              msg: 'An email has been sent to you',
                           });
                        }
                     );

                     const token = new Token({
                        userId: user._id,
                        token: crypto.randomBytes(32).toString('hex'),
                     });

                     token.save().then((t) => {
                        // console.log(t);

                        const url = `${process.env.BASE_URL}/users/${user._id}/verify/${t.token}`;

                        // console.log(url);

                        sendEmail(user.email, 'Verify Email', url);
                     });
                  })
                  .catch((err) => {
                     if (err) throw err;
                  });
            });
         });
      }
   });
});

// Login a user
// POST @/api/users/auth
// Public
router.post('/auth', (req, res) => {
   const { email, password } = req.body;

   // Validation
   if (!email || !password) {
      res.status(400).json({ msg: 'Please enter all fields!' });
   } else {
      User.findOne({ email }).then((user) => {
         if (!user) {
            return res
               .status(400)
               .json({ msg: 'User does not exist! Please Register!' });
         }

         bcrypt.compare(password, user.password).then((isMatch) => {
            if (!isMatch) {
               return res.status(400).json({ message: 'Invalid credentials!' });
            }

            jwt.sign({ id: user._id }, process.env.JWT_SECRET, (err, token) => {
               if (err) throw err;
               res.json({
                  token,
                  user: {
                     id: user._id,
                     firstName: user.firstName,
                     lastName: user.lastName,
                     email: user.email,
                     isAdmin: user.isAdmin,
                     verified: user.verified,
                  },
               });
            });
         });
      });
   }
});

router.get('/:id/verify/:token', async (req, res) => {
   try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(400).json({ msg: 'Invalid link!' });

      const token = await Token.findOne({
         userId: user._id,
         token: req.params.token,
      });
      if (!token) return res.status(400).json({ msg: 'Invalid link!' });

      User.findById(req.params.id).then((u) => {
         u.verified = true;

         u.save();
      });

      await token.remove();

      res.status(200).send({ msg: 'Email verified successfully' });
   } catch (err) {
      return;
   }
});
export default router;
