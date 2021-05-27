import { createSlice } from "@reduxjs/toolkit";
import { SearchState } from "../types";

const initialState = {
  recentSearches: [],
} as SearchState;

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    saveRecentSearches: (state, { payload }) => {
      const foundText = state.recentSearches.findIndex(
        (text) => text === payload.text
      );
      if (foundText === -1)
        return {
          ...state,
          recentSearches: [...state.recentSearches, payload.text],
        };
      return { ...state };
    },
  },
});

export const searchState = (state) => state;

export default searchSlice.reducer;
