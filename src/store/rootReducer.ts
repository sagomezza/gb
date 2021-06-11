// Libs
import { combineReducers } from '@reduxjs/toolkit';
// Slices
import example from './example/exampleReducer';
import search from './search/searchReducer';

const rootReducer = combineReducers({
  example,
  search,
});

export default rootReducer;
