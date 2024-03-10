import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = `
 https://power-pulse-back.onrender.com/`;

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

export const fetchDiary = createAsyncThunk(
  'diary/getDiaryByDate',
  async (date, thunkAPI) => {
    try {
      const response = await axios.get(`diary/${date}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchAddProduct = createAsyncThunk(
  'diary/addProduct',
  async (product, thunkAPI) => {
    try {
      const response = await axios.post(`diary/products`, product);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchAddExercises = createAsyncThunk(
  'diary/AddExercise',
  async (exercise, thunkAPI) => {
    try {
      const response = await axios.post(`diary/exercises`, exercise);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchDeleteProduct = createAsyncThunk(
  'diary/deleteProduct',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`diary/products/${id}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchDeleteExercise = createAsyncThunk(
  'diary/deleteExercise',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`diary/exercises/${id}`);
      // setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
