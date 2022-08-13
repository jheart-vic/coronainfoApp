import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import countriesReducer from './CoronaVirus'


const rootStore = combineReducers({
   country: countriesReducer

});

const store = configureStore({
  reducer: rootStore,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;