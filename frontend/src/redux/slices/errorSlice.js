import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action) => {
      // state=action.payload // wrong cause immer will not create new state
      return action.payload;
    },
    clearError: () => {
      return initialState;
    },
  },
});

// action creators
export const { setError, clearError } = errorSlice.actions;

// selector
export const selectErrorMessage = (state) => state.error;
console.log(errorSlice)

export default errorSlice.reducer;
