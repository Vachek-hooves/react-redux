import { useState } from 'react';
import { useDispatch } from 'react-redux';

import createBookWithId from '../../utils/createBookWithId';
import {
  addBook,
  thunckFunction,
  fetchBook,
} from '../../redux/slices/booksSlice';
import booksData from '../../data/books.json';
import './BookForm.css';

export default function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  //* useDispatch - hook for action sending (it will be an object)
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      // dispatch action
      const book = createBookWithId({ author, title }, 'manual');

      dispatch(addBook(book));
      setTitle('');
      setAuthor('');
    }
  };

  const handleAddRandomBook = () => {
    // ! My version
    // // console.log(booksData);
    // const randomNumber = Math.floor(Math.random() * 100);
    // // console.log(randomNumber);
    // const randomBook = booksData[randomNumber];
    // // console.log(randomBook);
    // const book = {
    //   title: randomBook.title,
    //   author: randomBook.author,
    //   year: randomBook.year,
    //   id: uuidv4(),
    // };
    // dispatch(addBook(book));

    //
    // ! tutorial version
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];
    dispatch(addBook(createBookWithId(randomBook, 'random')));
  };

  // // ! thuck function - working with REDUX asynchroniously
  // const thunckFunction = async (dispatch, getState) => {
  // dispatch - send action to store
  // getState - to get current state
  //   try {
  //     const response = await axios.get('http://localhost:4000/random-book');
  //     if (response?.data?.title && response?.data?.author) {
  //       dispatch(addBook(createBookWithId(response.data, 'API')));
  //     }
  //   } catch (error) {
  //     return console.log(error);
  //   }
  // };

  const handleAddRandomBookViaApi = () => {
    dispatch(fetchBook());
  };

  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random
        </button>
        <button type="button" onClick={handleAddRandomBookViaApi}>
          Add random via API
        </button>
      </form>
    </div>
  );
}
