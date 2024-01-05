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
    resetFilters: (state) => {
      return initialState;
    },
  },
});
// now filterSlice is an object which has properties "actions"
console.log(filterSlice.actions);
console.log(filterSlice.actions.setTitleFilter('test')); // 'test' - is a payload example like from a classic actionCreator

// * destructuring setTitleFilter (actionCreator) method from filterSlice

export const { setTitleFilter } = filterSlice.actions;
export const { resetFilters } = filterSlice.actions;
console.log(filterSlice.actions.resetFilters)

export const selectTitleFilter = (state) => state.filter.title;

// export whole reducer to add it to store.
export default filterSlice.reducer;
