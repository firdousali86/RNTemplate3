import modalReducer from './modal/modalSlice';
import cakeReducer from './cake/cakeSlice';
import icecreamReducer from './icecream/icecreamSlice';
import authSlice from './auth/authSlice';
import todosSlice from './todos/todosSlice';
import bookSlice from './book/bookSlice';
import carSlice from './car/carSlice';
import cartSlice from './cart/cartSlice';
import itemsSlice from './items/itemsSlice';
import userSlice from './user/userSlice';

export default {
  modal: modalReducer,
  cake: cakeReducer,
  icecream: icecreamReducer,
  auth: authSlice,
  todos: todosSlice,
  items: itemsSlice,
  book: bookSlice,
  car: carSlice,
  cart: cartSlice,
  user: userSlice,
};
