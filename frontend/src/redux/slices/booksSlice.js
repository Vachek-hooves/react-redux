import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import createBookWithId from '../../utils/createBookWithId';

const initialState = [];

// NOTES:
// 'books/fetchBook' - books- bookSlice name. fetchBook - name of what function will do.
export const fetchBook = createAsyncThunk('books/fetchBook', async () => {
  const response = await axios.get('http://localhost:4000/random-book');
  return response.data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      // action creator
      state.push(action.payload);
      // return [...state, action.payload] // this will create new state.
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
      // another way
      //   const index = state.findIndex((book) => (book.id === action.payload));
      //   if (index !== -1) {
      //     state.splice(index, 1);
      //   }
    },
    toggleFavorite: (state, action) => {
      state.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite;
        }
      });
      // state.map((book) =>
      //   book.id === action.payload ? { ...book, isFavorite: !book.isFavorite }
      //     : book
      // );
    },
  },
  // to integrate async thunk function need to use extraReducers
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      if (action.payload.title && action.payload.author) {
        state.push(createBookWithId(action.payload, 'API'));
      }
    });
    // action in case promise rejected 
    // builder.addCase(fetchBook.rejected, (state, action) => {
    //   console.log(action);
    //   state.errorMsg = action.error.message;
    // });
  },
});

// thunk fn which is not integrated to reducers
// export const thunckFunction = async (dispatch, getState) => {
//   try {
//     const response = await axios.get('http://localhost:4000/random-book');
//     if (response?.data?.title && response?.data?.author) {
//       dispatch(addBook(createBookWithId(response.data, 'API')));
//     }
//   } catch (error) {
//     return console.log(error);
//   }
// };

// * destructuring (actionCreator) methods from filterSlice
export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

// * destructuring state condition
export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
