const express = require('express');
const cors = require('cors');
const booksData = require('./data/books.json'); // import book data

// create express application
const app = express();

app.use(cors()); // apply cors to prevent error: Cross-Origin-Resorce-Shering. When frontend sends request to backend.

function getRendomBook() {
  const randomIndex = Math.floor(Math.random() * booksData.length); // create fn to generate random number depend on array length
  const randomBook = booksData[randomIndex]; // choose random book depent on previously generated number
  return randomBook;
}

// when request proccesing

app.get('/random-book', (req, res) => {
  res.json(getRendomBook()); // return book on response in json type.
});

app.get('/random-book-delayed', (req, res) => {
  setTimeout(() => {
    res.json(getRendomBook());
  }, 2000);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
