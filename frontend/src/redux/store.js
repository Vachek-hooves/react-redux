import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import booksSlice from './slices/booksSlice';

const store = configureStore({
  reducer: { books: booksSlice, filter: filterSlice },
});

export default store;
