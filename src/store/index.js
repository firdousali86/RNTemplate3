import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import modalReducer from '../features/modal/modalSlice';
import cakeReducer from '../features/cake/cakeSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    cake: cakeReducer,
  },
});
