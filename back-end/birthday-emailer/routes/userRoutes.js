const express = require('express');
const { scheduleBirthdayEmails } = require('../emailScheduler');
const User = require('../models/User');
const router = express.Router();

// Endpoint to register a user
router.post('/register', async (req, res) => {
    const { name, email, dateOfBirth } = req.body;

    // Basic validation
    if (!name || !email || !dateOfBirth) {
        return res.status(400).send('All fields are required.');
    }

    try {
        const newUser = new User({ name, email, dateOfBirth });
        await newUser.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(500).send('Error registering user: ' + error.message);
    }
});

// Endpoint to get all users
router.get('/users', async (req, res) => {
    scheduleBirthdayEmails()
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send('Error fetching users: ' + error.message);
    }
});

module.exports = router;
