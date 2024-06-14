const express = require("express");
const books = require("./data");
const booksRouter = require("./apis/books/routes");
const connectDB = require("./dataBase");

const app = express();
app.use(express.json());
app.use("/books", booksRouter);

////////////////////////////
connectDB();
app.listen(8001, () => {
  console.log(" I'm running at port 8001");
});
