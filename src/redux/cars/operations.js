import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { handleErrorAsyncOperation } from 'utils';

axios.defaults.baseURL = 'https://652efdb90b8d8ddac0b22858.mockapi.io/api/cars';

const getCarsOperation = createAsyncThunk(
  'cars/get',
  async (credential, thunkAPI) => {
    return await handleErrorAsyncOperation(async () => {
      axios.defaults.params = {};
      const dataCount = await axios.get('/cars');
      axios.defaults.params = { page: credential, limit: 8 };
      const { data } = await axios.get('/cars');
      return { data, dataCount: dataCount.data.length };
    }, thunkAPI);
  }
);
const getMoreCarsOperation = createAsyncThunk(
  'cars/more',
  async (credential, thunkAPI) => {
    return await handleErrorAsyncOperation(async () => {
      axios.defaults.params = { page: credential, limit: 8 };
      const { data } = await axios.get('/cars');
      return data;
    }, thunkAPI);
  }
);

const filterGetCarsOperation = createAsyncThunk(
  'cars/filter',
  async (credential, thunkAPI) => {
    return await handleErrorAsyncOperation(async () => {
      const { make, rentalCost, from, to } = credential;
      axios.defaults.params = { page: 1, limit: 8 };
      if (make || rentalCost || from || to) {
        axios.defaults.params = {};
      }

      if (make !== '') {
        axios.defaults.params = { make };
      }

      const { data } = await axios.get('/cars');
      if (rentalCost !== 0) {
        const newData = data.filter(
          ({ rentalPrice }) => rentalPrice.split('$')[1] <= rentalCost
        );
        return { data: newData, isFiltered: true };
      }

      if (from || to) {
        const fromToObject = { from, to };
        if (fromToObject.from !== 0 && fromToObject.to !== 0) {
          const newData = data.filter(
            ({ mileage }) => mileage >= from && mileage <= to
          );
          return { data: newData, isFiltered: true };
        }
        if (fromToObject.from !== 0) {
          const newData = data.filter(({ mileage }) => mileage >= from);
          return { data: newData, isFiltered: true };
        }
        if (fromToObject.to !== 0) {
          const newData = data.filter(({ mileage }) => mileage <= to);
          return { data: newData, isFiltered: true };
        }
      }
      if (make !== '') return { data, isFiltered: true };
      return { data, isFiltered: false };
    }, thunkAPI);
  }
);

export { getCarsOperation, getMoreCarsOperation, filterGetCarsOperation };
