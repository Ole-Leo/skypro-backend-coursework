const Book = require('../models/book');

const getBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    return res.status(200).send(books);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const getBook = async (req, res, next) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).send('Book not found');
    }
    return res.status(200).send(book);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const createBook = async (req, res, next) => {
  const bookData = req.body;

  try {
    const newBook = await Book.create(bookData);
    return res.status(201).send(newBook);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const updateBook = async (req, res, next) => {
  const { id } = req.params;

  try {
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      return res.status(404).send('Book not found');
    }
    return res.status(200).send(updatedBook);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const deleteBook = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).send('Book not found');
    }
    return res.status(200).send(`Book has been deleted`);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

module.exports = { getBook, getBooks, createBook, updateBook, deleteBook };
