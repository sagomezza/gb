// Libs
import { combineReducers } from '@reduxjs/toolkit';
// Slices
import example from './example/exampleReducer';
import search from './search/searchReducer';
import app from './app/appReducer';

const rootReducer = combineReducers({
  example,
  search,
  app,
});

export default rootReducer;
