const Book = require("../../modals/Book");

const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();

    return res.json(books);
  } catch (error) {
    return next(error);
  }
};
const createBook = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }
    const newBook = await Book.create(req.body);
    return res.status(201).json(newBook);
  } catch (error) {
    return next(error);
  }
};

const getOneBook = async (req, res, next) => {
  const id = req.params.id;
  try {
    const book = await Book.findById(id);
    if (book) {
      return res.status(200).json(book);
    } else {
      return res.status(404).json({ meg: "book with this id not found!!" });
    }
  } catch (error) {
    return next(error);
  }
};

//update
const updateBook = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) {
      return res.status(404).json({ message: "Cannot find book" });
    }
    res.json(book);
  } catch (error) {
    return next(error);
  }
};

//delete

const deleteBook = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Cannot find book" });
    }
    res.json({ message: "Deleted Book" });
  } catch (error) {
    return next(error);
  }
};
module.exports = {
  getAllBooks,
  createBook,
  getOneBook,
  updateBook,
  deleteBook,
};
