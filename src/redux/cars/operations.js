import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { handleErrorAsyncOperation } from 'utils';

axios.defaults.baseURL = 'https://652efdb90b8d8ddac0b22858.mockapi.io/api/cars';
axios.defaults.params = { completed: false, page: 0, limit: 8 };

const getCarsOperation = createAsyncThunk(
  'cars/get',
  async (credential, thunkAPI) => {
    return await handleErrorAsyncOperation(async () => {
      axios.defaults.params.page = credential;
      const { data } = await axios.get('/cars');
      return data;
    }, thunkAPI);
  }
);
const getMoreCarsOperation = createAsyncThunk(
  'cars/more',
  async (credential, thunkAPI) => {
    return await handleErrorAsyncOperation(async () => {
      axios.defaults.params.page = credential;
      const { data } = await axios.get('/cars');
      return data;
    }, thunkAPI);
  }
);

export { getCarsOperation, getMoreCarsOperation };
