import { createAction } from '@reduxjs/toolkit';

import { IAuthData } from 'store/types';

export const saveUserToken = createAction(
  'auth/saveUserToken',
  ({ token, userId }: { token: string; userId: string }) => ({
    payload: { token, userId },
  }),
);

export const toggleAuthLoader = createAction('auth/toggleAuthLoader', (newStatus: boolean) => ({
  payload: newStatus,
}));

export const saveUserInfo = createAction('auth/saveUserInfo', (user: IAuthData) => ({
  payload: user,
}));

export const removeUserToken = createAction('auth/removeUserToken');
