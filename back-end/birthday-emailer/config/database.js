const mongoose = require("mongoose");

const connectToDatabase = () => {
    console.log("Connecting to the database...");
    const uri = "mongodb+srv://anjalisaini6020:loMlQOr3aA15w7pK@cluster0.3j6f1.mongodb.net/hellotest";

    mongoose.connect(uri)
        .then(() => {
            console.log("Database connected successfully.");
        })
        .catch((err) => {
            console.error("Error connecting to the database:", err);
        });
};

module.exports = connectToDatabase;
