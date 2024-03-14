import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = `
 https://power-pulse-back.onrender.com/`;

const somethingWrong = () => {
  toast.loading('Something wrong, try again');
};

export const fetchDiary = createAsyncThunk(
  'diary/getDiaryByDate',
  async (date, thunkAPI) => {
    try {
      const response = await axios.get(`diary/${date}`);

      return response.data;
    } catch (e) {
      toast.error('No data on this day');
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
      somethingWrong();
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchAddExercise = createAsyncThunk(
  'diary/AddExercise',
  async (exercise, thunkAPI) => {
    try {
      const response = await axios.post(`diary/exercises`, exercise);

      return response.data;
    } catch (e) {
      somethingWrong();
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
      somethingWrong();
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchDeleteExercise = createAsyncThunk(
  'diary/deleteExercise',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`diary/exercises/${id}`);
      return response.data;
    } catch (e) {
      somethingWrong();
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
