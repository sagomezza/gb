// Libs
import { combineReducers } from '@reduxjs/toolkit';
// Slices
import example from './example/exampleReducer';
import search from './search/searchReducer';
import app from './app/appReducer';
import messages from './messages/messagesReducer';
import spots from './spots/spotsReducer';
import auth from './auth/authReducer';

const rootReducer = combineReducers({
  auth,
  example,
  search,
  app,
  messages,
  spots,
});

export default rootReducer;
