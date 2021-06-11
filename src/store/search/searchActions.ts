import { createAction } from '@reduxjs/toolkit';

export const saveRecentSearches = createAction(
  'search/saveRecentSearches',
  ({ text }: { text: string }) => ({ payload: { text } }),
);
