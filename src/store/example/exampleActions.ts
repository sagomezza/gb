// CONSTANTS
import { INTERNAL_SERVER_ERROR } from 'utils/constants';

// REDUX
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

// PROVIDER
import ExampleService from '../../provider/example/exampleService';

// TYPES
import { FetchExampleEntity } from '../types';

export const updateHomeWordExample = createAction(
  'example/updateHomeWordExample',
  ({ word }: { word: string }) => ({ payload: { word } }),
);

export const resetExampleError = createAction('example/resetExampleError');

export const resetExample = createAction('example/resetExample');

export const fetchExample = createAsyncThunk<FetchExampleEntity, undefined, { rejectValue: any }>(
  'example/fetchExample',
  async (undefined, { rejectWithValue }) => {
    try {
      const response: any = await ExampleService.fetchExample();

      return response;
    } catch (error) {
      if (!error) {
        throw new Error(INTERNAL_SERVER_ERROR);
      }

      return rejectWithValue(error);
    }
  },
);
