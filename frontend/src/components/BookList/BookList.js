import { useDispatch, useSelector } from 'react-redux';
import { deleteBook, toggleFavorite } from '../../redux/books/actionCreators';
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs';
import './BookList.css';
import { selectTitleFilter } from '../../redux/slices/filterSlice';

export default function BookList() {
  // useSelector - hook for on change state watching
  const books = useSelector((state) => state.books);
  const titleFilter = useSelector(selectTitleFilter);
  // console.log(titleFilter);

  // useDispatch - hook for action sending (it will be an object)
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    // console.log(id);
    console.log(deleteBook(id));
    dispatch(deleteBook(id));
  };

  const toggleHandle = (id) => {
    dispatch(toggleFavorite(id));
  };

  const filteredBooks = books.filter((book) => {
    const mathcesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());
    // console.log({ title: book.title, mathcesTitle });
    return mathcesTitle
  });

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No available books</p>
      ) : (
        <ul>
          {filteredBooks.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. title: {book.title} author:{' '}
                <strong>{book.author}</strong>
              </div>
              <div className="book-actions">
                <span onClick={() => toggleHandle(book.id)}>
                  {book.isFavorite ? (
                    <BsBookmarkStarFill className="star-icon" />
                  ) : (
                    <BsBookmarkStar className="star-icon" />
                  )}
                </span>
                <button onClick={() => handleDeleteBook(book.id)}>
                  delete book
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
