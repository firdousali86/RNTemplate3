import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../reducers/cartSlice';
import modalReducer from '../reducers/modalSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
