import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { handleErrorAsyncOperation } from 'utils';

axios.defaults.baseURL = 'https://652efdb90b8d8ddac0b22858.mockapi.io/api/cars';
axios.defaults.params = { completed: false, page: 0, limit: 8 };

const getCarsOperation = createAsyncThunk('cars', async (_, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.get('/cars');
    axios.defaults.params.page += 1;
    return data;
  }, thunkAPI);
});

export { getCarsOperation };
