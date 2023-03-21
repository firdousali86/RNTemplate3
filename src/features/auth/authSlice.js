import {createSlice} from '@reduxjs/toolkit';

const initialState = {email: undefined, isLoggedIn: false};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLogin: (state, action) => {
      state.email = action.email;
      state.isLoggedIn = true;
    },
    onLogout: state => {
      state.email = undefined;
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
