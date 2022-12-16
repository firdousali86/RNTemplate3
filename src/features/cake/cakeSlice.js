import {createSlice} from '@reduxjs/toolkit';
import {icecreamActions} from '../icecream/icecreamSlice';

const initialState = {numOfCakes: 10};

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: state => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(icecreamActions.ordered, state => {
      state.numOfCakes--;
    });
  },
});

export const cakeActions = cakeSlice.actions;

export default cakeSlice.reducer;
