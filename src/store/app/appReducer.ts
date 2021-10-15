// LIBS
import { createSlice } from '@reduxjs/toolkit';

// TYPES
import { AppState } from '../types';

const initialState = {
  modalAlert: {
    data: '',
    title: '',
    text: '',
    textButton: '',
    visible: false,
    type: '',
  },
  editProfile: false,
  profile: { description: '', name: '', interests: [], isTrainer: false },
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
    toggleEditProfile: (state, { payload }) => ({
      ...state,
      editProfile: payload,
    }),
    saveProfileInfo: (state, { payload }) => ({
      ...state,
      profile: { ...payload },
    }),
  },
});

export const modalState = (state) => state;

export default appSlice.reducer;
