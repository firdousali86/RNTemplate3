import cartReducer from './cart/cartSlice';
import modalReducer from './modal/modalSlice';
import cakeReducer from './cake/cakeSlice';
import icecreamReducer from './icecream/icecreamSlice';
import authSlice from './auth/authSlice';
import todosSlice from './todos/todosSlice';
import bookSlice from './book/bookSlice';
import carSlice from './car/carSlice';

export default {
  cart: cartReducer,
  modal: modalReducer,
  cake: cakeReducer,
  icecream: icecreamReducer,
  auth: authSlice,
  todos: todosSlice,
  book: bookSlice,
  car: carSlice,
};
