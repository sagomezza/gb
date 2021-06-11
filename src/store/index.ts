// Libs
import { configureStore, getDefaultMiddleware, Action } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { ThunkAction } from 'redux-thunk';
import { useDispatch } from 'react-redux';
// Reducers
import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }).concat(logger),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
