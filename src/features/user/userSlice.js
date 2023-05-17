import {createSlice} from '@reduxjs/toolkit';

const initialState = {data: {}};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    request: state => {
      state.isFetching = true;
    },
    success: (state, action) => {
      state.isFetching = false;
      state.data = action.payload;
      state.failure = false;
      state.errorMessage = '';
    },
    failure: (state, action) => {
      state.isFetching = false;
      state.failure = true;
      state.errorMessage = action.errorMessage;
    },
    onLogout: (state, action) => {
      state = initialState;
    },
    clear: state => {
      state = initialState;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
