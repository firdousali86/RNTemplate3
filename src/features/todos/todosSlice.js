import {createSlice} from '@reduxjs/toolkit';

const initialState = {todos: []};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    request: state => {
      state.isFetching = true;
    },
    success: (state, action) => {
      state.todos = action.payload;
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

export const todosActions = todosSlice.actions;

export default todosSlice.reducer;
