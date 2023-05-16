import {createSlice} from '@reduxjs/toolkit';

const initialState = {items: []};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    request: state => {
      state.isFetching = true;
    },
    success: (state, action) => {
      state.items = action.payload;
      state.isFetching = false;
      state.failure = false;
      state.errorMessage = '';
    },
    failure: (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.errorMessage;
      state.failure = true;
    },
  },
});

export const itemsActions = itemsSlice.actions;

export default itemsSlice.reducer;
