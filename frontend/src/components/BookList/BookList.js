import { useDispatch, useSelector } from 'react-redux';
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs';
import {
  deleteBook,
  toggleFavorite,
  selectBooks,
} from '../../redux/slices/booksSlice';
import './BookList.css';
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectFavoriteFilter,
} from '../../redux/slices/filterSlice';

export default function BookList() {
  // useSelector - hook for on change state watching
  const books = useSelector(selectBooks);
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const favoriteFilter = useSelector(selectFavoriteFilter);
  // console.log('title filter -',titleFilter, 'author filter -', authorFilter);

  // useDispatch - hook for action sending (it will be an object)
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    // console.log(id);
    console.log(deleteBook(id));
    dispatch(deleteBook(id));
  };

  const toggleHandle = (id) => {
    dispatch(toggleFavorite(id));
    console.log(id);
  };

  const filteredBooks = books.filter((book) => {
    const mathcesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());
    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase());
    const matchesFavorite = favoriteFilter ? book.isFavorite : book;
    // return mathcesTitle && matchesAuthor
    // console.log('author match',book.author.toLowerCase().includes(authorFilter.toLowerCase()));
    // console.log('title macth',book.title.toLowerCase().includes(titleFilter.toLowerCase()));
    // console.log({ title: book.title, author: book.author, mathcesTitle ,matchesAuthor});
    return matchesAuthor && mathcesTitle && matchesFavorite;
  });

  const highlightMatch = (text, filter) => {
    // filter - will be value from one of inputs
    if (!filter) return text; // if filter false (empty string) then return text without changes.

    // if filter not empty then string need to chank & add class to some of them.
    const regex = new RegExp(`(${filter})`, 'gi'); // highlight all strings. g- global means all text, i- case insensitive(registr doens`t metter)
    console.log(text.split(regex));
    return text.split(regex).map((textPart, i) => {
      if (textPart.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className="highlight">
            {textPart}
          </span>
        );
      }
      return textPart;
    });
  };

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
                {++i}. title: {highlightMatch(book.title, titleFilter)}, author:{' '}
                <strong>{highlightMatch(book.author, authorFilter)}</strong> (
                {book.source})
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
