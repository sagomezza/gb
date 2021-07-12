import { createSlice } from '@reduxjs/toolkit';
import { MessagesState } from '../types';

const initialState = {
  recentConversations: [],
} as MessagesState;

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    saveRecentConversations: (state, { payload }) => {
      const foundText = state.recentConversations.findIndex((item) => item.id === payload.item.id);
      if (foundText === -1)
        return {
          ...state,
          recentConversations: [...state.recentConversations, payload.item],
        };
      return { ...state };
    },
  },
});

export const messagesState = (state) => state;

export default messagesSlice.reducer;
