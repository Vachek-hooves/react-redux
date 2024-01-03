import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../../redux/books/actionCreators';
import './BookList.css';

export default function BookList() {
  // useSelector - hook for on change state watching
  const books = useSelector((state) => state.books);
  // useDispatch - hook for action sending (it will be an object)
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    // console.log(id);
    console.log(deleteBook(id))
    dispatch(deleteBook(id));
  };

  return (
    <div className="app-block book-list">
      <h2>Add a Book List</h2>
      {books.length === 0 ? (
        <p>No available books</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                <p>
                  {++i}. Book title: {book.title}
                </p>
                <p>
                  Book author: <strong>{book.author}</strong>
                </p>
                <div className="book-actions">
                  <button onClick={() => handleDeleteBook(book.id)}>
                    delete book
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
