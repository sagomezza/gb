import { createAction } from '@reduxjs/toolkit';
import { Spot, Place } from 'store/types';

export const setActiveSpot = createAction('spots/setActiveSpot', (payload: Spot | Place) => ({
  payload,
}));

export const resetActiveSpot = createAction('spots/resetActiveSpot');
