import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import cartReducer from '../features/cart/cartSlice';
import modalReducer from '../features/modal/modalSlice';
import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/icecream/icecreamSlice';
import {combineReducers} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/lib/persistStore';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

let persistConfig = {key: 'root', storage};

let rootReducer = combineReducers({
  cart: cartReducer,
  modal: modalReducer,
  cake: cakeReducer,
  icecream: icecreamReducer,
});

let persistedReducer = persistReducer(persistConfig, rootReducer);

const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
});

let store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

let persistor = persistStore(store);

export default {
  store,
  persistor,
};
