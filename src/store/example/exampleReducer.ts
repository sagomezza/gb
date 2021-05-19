import { createSlice } from "@reduxjs/toolkit";
import { getErrorMessage } from "utils/general";
import { ExampleState } from "../types";
import { fetchExample } from "./exampleActions";

const initialState = {
  exampleError: null,
  fetchExample: null,
  homeWord: "",
} as ExampleState;

const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    updateHomeWordExample: (state, { payload }) => ({
      ...state,
      homeWord: payload.word,
    }),
    resetExampleError: (state) => ({ ...state, exampleError: null }),
    resetExample: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchExample.fulfilled, (state, { payload }) => ({
      ...state,
      fetchExample: payload,
    }));
    builder.addCase(fetchExample.rejected, (state, action) => ({
      ...state,
      exampleError: getErrorMessage(action),
    }));
  },
});

export const exampleState = (state) => state;

export default exampleSlice.reducer;
