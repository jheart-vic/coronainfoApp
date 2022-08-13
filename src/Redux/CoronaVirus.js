import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
//  const RETRIEVE_COUNTRIES = './conoraVirus/RETRIEVE_COUNTRIES';
import axios from 'axios'


export const getCountries = createAsyncThunk('countries/getCountries', async () => {
  const res = await axios.get('https://corona-api.com/countries')
  return res.data;

  });

  const initialState = {
    loading: false,
    countries: [],
    error: ''
  }

  const countriesSlice = createSlice({
    name: 'countries',
    initialState,
     extraReducers: builder => {
      builder.addCase(getCountries.pending, state =>{
        state.loading = true
      })
      builder.addCase(getCountries.fulfilled, (state, action) =>{
        state.loading = false
        state.countries = action.payload
        state.error = ''
      })
      builder.addCase(getCountries.rejected, (state, action) =>{
        state.loading = false
        state.countries = []
        state.error = action.error.message
      })
    } 
  });

  export default countriesSlice.reducer