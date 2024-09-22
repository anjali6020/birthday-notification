const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectToDatabase = require("./config/database"); // Ensure this path is correct
const userRoutes = require('./routes/userRoutes');
const { scheduleBirthdayEmails } = require('./emailScheduler'); // Import the function
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to the database
connectToDatabase();

// Set up routes
app.use('/api/', userRoutes);

// Call the function to send birthday emails once at startup
scheduleBirthdayEmails();

// Optionally set an interval to run it daily
setInterval(scheduleBirthdayEmails, 86400000); // Check every 24 hours (in milliseconds)

const PORT = process.env.PORT || 27017;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
