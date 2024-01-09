import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import booksSlice from './slices/booksSlice';
import errorSlice from './slices/errorSlice';

const store = configureStore({
  reducer: { books: booksSlice, filter: filterSlice, error: errorSlice },
});

export default store;
