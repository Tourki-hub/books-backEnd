const express = require("express");
const {
  getAllBooks,
  createBook,
  getOneBook,
  updateBook,
  deleteBook,
} = require("./controllers");
const upload = require("../middleware/multer");
const booksRouter = express.Router();

booksRouter.get("/", getAllBooks);

booksRouter.post("/", upload.single("image"), createBook);
booksRouter.get("/:id", getOneBook);
booksRouter.post("/:id", updateBook);
booksRouter.delete("/:id", deleteBook);

module.exports = booksRouter;
