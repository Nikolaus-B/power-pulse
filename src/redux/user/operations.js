import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = `
 https://power-pulse-back.onrender.com/`;

export const fetchUserRegister = createAsyncThunk(
  'user/userRegister',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post(`users/register`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchUserLogIn = createAsyncThunk(
  'user/userLogIn',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post(`user/login`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchUserCurrent = createAsyncThunk(
  'user/userCurrent',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`users/current`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchUserParams = createAsyncThunk(
  'user/userParams',
  async (_, thunkAPI) => {
    try {
      const response = await axios.patch(`users/params`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchUserAvatars = createAsyncThunk(
  'user/userAvatars',
  async (_, thunkAPI) => {
    try {
      const response = await axios.patch(`users/avatars`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchUserLogout = createAsyncThunk(
  'user/userLogout',
  async (_, thunkAPI) => {
    try {
      const response = await axios.patch(`users/logout`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
