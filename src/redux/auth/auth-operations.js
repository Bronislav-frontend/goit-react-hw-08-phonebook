import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization =  `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ''
  }
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('users/signup', credentials) 
    token.set(data.token);
    return data;
  } catch (error) {
    return credentials.rejectWithValue(error.message);  
  }
})

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return credentials.rejectWithValue(error.message); 
  }
});

const logOut = createAsyncThunk('auth/logout', async ( ) => {
  try {
    await axios.post('users/logout');
    token.unset();
  } catch (error) {
    alert('Can`t logout')
  }
});

const operations = {
  register,
  logIn,
  logOut,
};

export default operations