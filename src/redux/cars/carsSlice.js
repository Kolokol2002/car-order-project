import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { getCarsOperation } from './operations';
import storage from 'redux-persist/lib/storage';
import {
  handleCarsFulfilled,
  handleCarsPending,
  handleCarsRejected,
} from 'utils/reduxActionHandlers/handleGetCars';

const initialState = {
  cars: [],
  filters: {},
  favorites: [],
  isLoading: false,
  error: null,
};

const carsPersistConfig = {
  key: 'cars',
  storage,
  whitelist: ['filters'],
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getCarsOperation.pending, handleCarsPending)
      .addCase(getCarsOperation.fulfilled, handleCarsFulfilled)
      .addCase(getCarsOperation.rejected, handleCarsRejected),
});

const carsReducer = carsSlice.reducer;

export const persistCarsReducer = persistReducer(
  carsPersistConfig,
  carsReducer
);
