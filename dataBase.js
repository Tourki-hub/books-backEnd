const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("connected to DB");
  } catch (error) {
    console.log("Error trying to connect to DB", error);
  }
};

module.exports = connectDB;
