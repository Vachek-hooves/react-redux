import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import booksReducer from './books/reducer';

const store = configureStore({
  reducer: { books: booksReducer, filter: filterSlice },
});

export default store;
