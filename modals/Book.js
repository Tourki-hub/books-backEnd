const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, default: 5 },
  image: String,
});

module.exports = mongoose.model("book", bookSchema);
