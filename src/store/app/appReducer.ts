// LIBS
import { createSlice } from '@reduxjs/toolkit';

// TYPES
import { AppState } from '../types';

const initialState = {
  modalAlert: {
    title: '',
    text: '',
    textButton: '',
    visible: false,
    type: '',
  },
} as AppState;

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showModalAlert: (state, { payload }) => ({
      ...state,
      modalAlert: payload,
    }),
    hideModalAlert: (state) => ({ ...state, modalAlert: { ...state.modalAlert, visible: false } }),
  },
});

export const modalState = (state) => state;

export default appSlice.reducer;
