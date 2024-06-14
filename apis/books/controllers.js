const books = require("../../data");

const getAllBooks = (req, res) => {
  return res.json(books);
};
const createBook = (req, res) => {
  books.push(req.body);
  return res.json(books);
};

const getOneBook = (req, res) => {
  const id = req.params.id;
  const oneBook = books.find((book) => {
    return book.id == id;
  });
  if (oneBook) return res.json(oneBook);
  else {
    return res.json("there are no such ID");
  }
};
module.exports = { getAllBooks, createBook, getOneBook };
