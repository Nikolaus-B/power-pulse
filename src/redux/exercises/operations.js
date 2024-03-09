import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = `https://power-pulse-back.onrender.com/`;

export const fetchExercises = createAsyncThunk(
  'exercises/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`exercises`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchFilters = createAsyncThunk(
  'exercises/filters/getAll',
  async function (filter, {rejectWithValue, dispatch}){
    try {
      const {data}= await axios.get(`exercises/filters/${filter}`);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);