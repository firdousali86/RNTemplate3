import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import cartReducer from '../features/cart/cartSlice';
import modalReducer from '../features/modal/modalSlice';
import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/icecream/icecreamSlice';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
});

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    cake: cakeReducer,
    icecream: icecreamReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
