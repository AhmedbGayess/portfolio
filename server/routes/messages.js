const express = require("express");
const passport = require("passport");
const nodemailer = require("nodemailer");
const {
  mailHost,
  mailUser,
  mailPass,
  receivingMail
} = require("../config/keys");

const router = express.Router();

// Import Message model and validation
const Message = require("../models/Message");
const validateMessage = require("../validation/messageValidation");

// Send new message
router.post("/", (req, res) => {
  const { error } = validateMessage(req.body);
  if (error) {
    return res.status(400).json(error.details[0].message);
  }

  const newMessage = new Message(req.body);

  newMessage.save().then(async (message) => {
    res.json(message);

    const email = `
    <h1>You have a new message</h1>
    <h3>Info</h3>
    <ul>
      <li>Name: ${req.body.firstName} ${req.body.lastName}</li>
      <li>Email Address: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport({
      host: mailHost,
      port: 587,
      secure: false,
      auth: {
        user: mailUser,
        pass: mailPass
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    let mailOptions = {
      from: `"My Website" <${mailUser}>`,
      to: receivingMail,
      subject: "New Message",
      text: "Hello world?",
      html: email
    };

    let info = await transporter.sendMail(mailOptions);
  });
});

// Get all messages
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const messages = await Message.find().sort({sentAt: -1});
    if (!messages) {
      return res.status(404).json({ messages: "No messages found" });
    }

    res.json(messages);
  }
);

// Get message by id
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const message = await Message.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ message: "No message found" });
    }

    res.json(message);
  }
);

// Delete message
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Message.findByIdAndRemove(req.params.id)
      .then(() => res.json({ delete: "Done" }))
      .catch(err => res.json(err));
  }
);

module.exports = router;
