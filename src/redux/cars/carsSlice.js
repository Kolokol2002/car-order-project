import { createAction, createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import {
  filterGetCarsOperation,
  getCarsOperation,
  getMoreCarsOperation,
} from './operations';
import storage from 'redux-persist/lib/storage';
import {
  handleCarsFulfilled,
  handleCarsMoreFulfilled,
  handleCarsPending,
  handleCarsRejected,
  handleFilterCarsFulfilled,
} from 'utils/reduxActionHandlers/handleGetCars';
export const pushFavoriteCard = createAction('pushFavoriteCard');
export const deleteFavoriteCard = createAction('deleteFavoriteCard');
export const filterGetMoreCars = createAction('filterGetMoreCars');

const initialState = {
  cars: [],
  dataCount: 0,
  filterCar: [],
  favorites: [],
  isLoading: false,
  error: null,
};

const carsPersistConfig = {
  key: 'cars',
  storage,
  whitelist: ['filters', 'favorites'],
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getCarsOperation.pending, handleCarsPending)
      .addCase(getCarsOperation.fulfilled, handleCarsFulfilled)
      .addCase(getCarsOperation.rejected, handleCarsRejected)
      .addCase(getMoreCarsOperation.pending, handleCarsPending)
      .addCase(getMoreCarsOperation.fulfilled, handleCarsMoreFulfilled)
      .addCase(getMoreCarsOperation.rejected, handleCarsRejected)
      .addCase(filterGetCarsOperation.pending, handleCarsPending)
      .addCase(filterGetCarsOperation.fulfilled, handleFilterCarsFulfilled)
      .addCase(filterGetCarsOperation.rejected, handleCarsRejected)
      .addCase(pushFavoriteCard, (state, action) => {
        state.favorites.push(action.payload);
      })
      .addCase(deleteFavoriteCard, (state, action) => {
        const res = state.favorites.filter(({ id }) => id !== action.payload);
        state.favorites = res;
      })
      .addCase(filterGetMoreCars, (state, action) => {
        const res = state.filterCar.slice(0, 8 * action.payload);
        state.cars = res;
      }),
});

const carsReducer = carsSlice.reducer;

export const persistCarsReducer = persistReducer(
  carsPersistConfig,
  carsReducer
);
