const express = require("express");
const { getAllBooks, createBook, getOneBook } = require("./controllers");
const booksRouter = express.Router();

booksRouter.get("/", getAllBooks);

booksRouter.post("/", createBook);
booksRouter.get("/:id", getOneBook);

module.exports = booksRouter;
