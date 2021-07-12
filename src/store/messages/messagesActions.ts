import { createAction } from '@reduxjs/toolkit';
import { IItemMessage } from '../types';

export const saveRecentConversations = createAction(
  'messages/saveRecentConversations',
  ({ item }: { item: IItemMessage }) => ({ payload: { item } }),
);
