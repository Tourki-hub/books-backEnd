const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tourkimufarej:0TGumlDBsaUNIBqE@cluster0.bk2fee4.mongodb.net/"
    );
    console.log("connected to DB");
  } catch (error) {
    console.log("Error trying to connect to DB", error);
  }
};

module.exports = connectDB;
