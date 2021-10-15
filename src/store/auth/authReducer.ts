import { createSlice } from '@reduxjs/toolkit';

import { UserState } from '../types';

const initialState: UserState = {
  loading: false,
  token: '',
  user: {
    email: '',
  },
  userId: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveUserInfo: (state, { payload }) => ({
      ...state,
      user: { ...payload },
    }),
    saveUserToken: (state, { payload }) => ({
      ...state,
      token: payload.token,
      userId: payload.userId,
    }),
    removeUserToken: () => ({
      ...initialState,
    }),
    toggleAuthLoader: (state, { payload }) => ({
      ...state,
      loading: payload,
    }),
  },
});

export const authState = (state) => state;

export default authSlice.reducer;
