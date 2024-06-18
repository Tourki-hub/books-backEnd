const express = require("express");
const booksRouter = require("./apis/books/routes");
const connectDB = require("./dataBase");
const morgan = require("morgan");
const cors = require("cors");
const notFound = require("./apis/middleware/NotFoundHandler");
const errorHandler = require("./apis/middleware/errorHandler");
const path = require("path");

const app = express();
app.use(express.json());
// The middleware before the main Function
app.use(morgan("dev"));
app.use(cors());
app.use("/media", express.static(path.join(__dirname, "media")));
// the main Function
app.use("/books", booksRouter);

// The middleware after the main Function

app.use(notFound);
app.use(errorHandler);

////////////////////////////
connectDB();
app.listen(8001, () => {
  console.log(" I'm running at port 8001");
});
