import {createSlice} from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState = {carCollection: []};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    addNewCar: (state, action) => {
      state.carCollection.push(action.payload);
    },
    deleteCar: (state, action) => {
      console.log(state.carCollection);

      state.carCollection = state.carCollection.filter(thisEl => {
        return !(
          thisEl.name === action.payload.name &&
          thisEl.brand === action.payload.brand &&
          thisEl.model === action.payload.model
        );
      });

      console.log(state.carCollection);
    },
  },
});

export const carActions = carSlice.actions;

export default carSlice.reducer;
