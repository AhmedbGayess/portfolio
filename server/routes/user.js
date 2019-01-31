const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

const router = express.Router();

// Get User model and validation
const User = require("../models/User");
const validateUser = require("../validation/userValidation");

// login and return JWT (json web token)
router.post("/", (req, res) => {
  // Validation
  const { error } = validateUser(req.body);
  if (error) {
    const errors = {};
    error.details.forEach(err => (errors[err.context.key] = err.message));
    return res.status(400).send(errors);
  }

  // Find user by email
  User.findOne({ email: req.body.email }).then(user => {
    //Check if user exists
    if (!user) {
      return res
        .status(404)
        .json({ email: "No user with the provided email address was found" });
    }

    // Check password
    bcrypt.compare(req.body.password, user.password).then(isMatch => {
      // Correct password
      if (isMatch) {
        // Create JWT payload
        const payload = {
          id: user.id,
          email: user.email
        };

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 }, // Token expires in one hour
          (err, token) => {
            res.json({
              success: true,
              token: `Bearer ${token}`
            });
          }
        );
      } else {
        // Incorrect password
        return res.status(400).json({ password: "Passoword incorrect" });
      }
    });
  });
});

module.exports = router;
