// Importing mongoose
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

// Importing Blog model
const Contact = require('../models/contact');
dotenv = require("dotenv");
dotenv.config();

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.PASS
    }
});



// =================================================
//  CONTACT ADD ROUTES
// =================================================


const contactUs = (req, res) => {

    let mailOptions = {
        from: req.body.email,
        to: 'attainu.deepambahre@gmail.com',
        subject: 'E-Commarce Store',
        text: req.body.feedback
    };
    let newContact = new Contact({
        _id : new mongoose.Types.ObjectId(),
        name : req.body.name,
        email : req.body.email,
        contactNo : req.body.contactNo,
        feedback : req.body.feedback
    });

    newContact.save()
    .then(contact => {
        console.log(contact);

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error.message);
            }
            console.log('success');
            res.status(200).json('success');
        });

    })
    .catch(err => {
        //req.flash('error','Failed to create contact.');
        res.status(400).json('fail');
    });

};

// Exports Our Index Routes
module.exports = {
    contactUs
};