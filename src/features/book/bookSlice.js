import {createSlice} from '@reduxjs/toolkit';

const initialState = {numberOfBooks: 0};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    bookOrdered: (state, action) => {
      state.numberOfBooks++;
    },
    bookSold: (state, action) => {
      state.numberOfBooks--;
    },
  },
});

export const bookActions = bookSlice.actions;
export default bookSlice.reducer;
