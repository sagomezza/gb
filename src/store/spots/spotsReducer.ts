import { createSlice } from '@reduxjs/toolkit';
import { Spot } from '../types';

export interface ISpotsReducerState {
  activeSpot: Spot;
}

const activeSpotDetailsInitialState: Spot = {
  address: '',
  age: 0,
  coordinates: { latitude: 0, longitude: 0 },
  email: '',
  gender: '',
  id: 0,
  interests: [],
  location: '',
  name: '',
  phone: '',
  picture: '',
  type: '',
};

const initialState: ISpotsReducerState = {
  activeSpot: activeSpotDetailsInitialState,
};

const spotsSlice = createSlice({
  name: 'spots',
  initialState,
  reducers: {
    setActiveSpot: (state, { payload }) => ({
      ...state,
      activeSpot: payload,
    }),
    resetActiveSpot: (state) => ({
      ...state,
      activeSpot: activeSpotDetailsInitialState,
    }),
  },
});

export default spotsSlice.reducer;
