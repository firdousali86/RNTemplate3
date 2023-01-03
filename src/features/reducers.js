import cartReducer from './cart/cartSlice';
import modalReducer from './modal/modalSlice';
import cakeReducer from './cake/cakeSlice';
import icecreamReducer from './icecream/icecreamSlice';

export default {
  cart: cartReducer,
  modal: modalReducer,
  cake: cakeReducer,
  icecream: icecreamReducer,
};
