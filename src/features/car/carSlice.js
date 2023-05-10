import {createSlice} from '@reduxjs/toolkit';

const initialState = {carCollection: []};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    addNewCar: (state, action) => {
      console.log('========');
      console.log(action.payload);
      console.log('========');

      state.carCollection.push(action.payload);
    },
  },
});

export const carActions = carSlice.actions;

export default carSlice.reducer;
