import { useSelector } from 'react-redux';
import './BookList.css';

export default function BookList() {
  // useSelector - hook for on change state watching
  const books = useSelector((state) => state.books);

  return (
    <div className="app-block book-list">
      <h2>Add a Book List</h2>
      {books.length === 0 ? (
        <p>No available books</p>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <div className="book-info">
                <p>{++index}. Book title: {book.title}</p>
                <p>
                  Book author: <strong>{book.author}</strong>
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
