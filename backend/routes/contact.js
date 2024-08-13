require('dotenv').config();
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


router.post('/', (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `${firstName} ${lastName} <${email}>`,
    to: process.env.EMAIL_USER,
    subject: `New message from ${firstName} ${lastName}: ${subject}`,
    text: `Sender: ${firstName} ${lastName} <${email}>\n\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send('An error occurred while sending the email.');
    }
    res.status(200).send('Email sent successfully.');
  });
});

module.exports = router;
