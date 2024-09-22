const nodemailer = require('nodemailer');
const User = require('./models/User');
require('dotenv').config(); // Load environment variables from .env file

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Use true for port 465
    auth: {
        user: process.env.EMAIL_USER, // Use environment variable
        pass: process.env.EMAIL_PASS, // Use environment variable
    }
});

// Function to send birthday email
const sendBirthdayEmail = async (user) => {
    console.log(user + '@@');
    const mailOptions = {
        from: process.env.EMAIL_USER, // Use environment variable
        to: user.email,
        subject: 'Happy Birthday!',
        text: `Happy Birthday, ${user.name}!`, // Fixed template literal
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
    } catch (error) {
        console.log('Error sending email:', error);
    }
};

// Function to schedule birthday emails
const scheduleBirthdayEmails = async () => {
    const today = new Date();
    const users = await User.find();

    users.forEach((user) => {
        const birthDate = new Date(user.dateOfBirth);
        if (birthDate.getDate() === today.getDate() && birthDate.getMonth() === today.getMonth()) {
            sendBirthdayEmail(user);
        }
    });
};

module.exports = { scheduleBirthdayEmails };
