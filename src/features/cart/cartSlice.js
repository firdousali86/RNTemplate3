import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemToAdd = action.payload;

      const itemPresentKey = state.cartItems.findIndex(thisElement => {
        return thisElement.item.name === itemToAdd.name;
      });

      if (itemPresentKey !== -1) {
        //item found
        const itemFound = state.cartItems[itemPresentKey];
        itemFound.quantity += 1;

        // state.cartItems[itemPresentKey] = itemFound;
      } else {
        //item doesnt exist
        state.cartItems.push({item: itemToAdd, quantity: 1});
      }
    },
    removeFromCart: (state, action) => {},
    clearCart: (state, action) => {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

// 2 iphones
// unit price $1000    $2000

// 3 microwave
// unit price $700     $2100

// Total amount $4100

// 2 - iphones           = price
// 1 - washing machine     = price
// 3 - microwaves        = price

// total price = sum up all top line items

// [
//   {item:{"name":"iphone"}, quantity:2},
//   {item:{"name":"washing machine"},quantity:1},
//   {item:{"name":"microwave"},quantity:3}
// ]
