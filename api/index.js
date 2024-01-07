const express = require('express');
const cors = require('cors');
const booksData = require('./data/books.json'); // import book data

// create express application
const app = express();

app.use(cors()); // apply cors to prevent error: Cross-Origin-Resorce-Shering. When frontend sends request to backend.

// when request proccesing
app.get('/random-book', (req, res) => {
  const randomIndex = Math.floor(Math.random() * booksData.length); // create fn to generate random number depend on array length
  const randomBook = booksData[randomIndex]; // choose random book depent on previously generated number
  res.json(randomBook); // return book on response in json type.
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
