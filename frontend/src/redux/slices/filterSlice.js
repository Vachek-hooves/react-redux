import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  author: '',
};

const filterSlice = createSlice({
  name: 'filter', // reducer name
  initialState: initialState,
  reducers: {
    // each function will make specified action
    setTitleFilter: (state, action) => {
      //   return { ...state, title: action.payload };
      state.title = action.payload;
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },
    resetFilters: (state, action) => {
      return  initialState
    },
  },
});
// now filterSlice is an object which has properties "actions"
console.log(filterSlice.actions);
console.log(filterSlice.actions.setTitleFilter('test')); // 'test' - is a payload example like from a classic actionCreator
console.log(filterSlice.actions.setAuthorFilter('author name'));
console.log(filterSlice.actions.resetFilters());

// * destructuring setTitleFilter (actionCreator) method from filterSlice

export const { setTitleFilter } = filterSlice.actions;
export const { resetFilters } = filterSlice.actions;
export const { setAuthorFilter } = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title; // to show result in input value attribute
export const selectAuthorFilter = (state) => state.filter.author; // fulter - name: filter, author - properties what is changing in setAuthorFilter reducer.

// export whole reducer to add it to store.
export default filterSlice.reducer;
