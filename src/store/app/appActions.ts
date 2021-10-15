// REDUX
import { createAction } from '@reduxjs/toolkit';
import { IEditProfileForm } from 'screens/Profile/types';

export const showModalAlert = createAction(
  'app/showModalAlert',
  ({
    data,
    text,
    textButton,
    title,
    type,
    visible,
  }: {
    data?: string;
    text: string;
    textButton: string;
    title: string;
    type: string;
    visible: boolean;
  }) => ({
    payload: { data, title, text, textButton, type, visible },
  }),
);

export const hideModalAlert = createAction('app/hideModalAlert');

export const toggleEditProfile = createAction('app/toggleEditProfile', (newStatus: boolean) => ({
  payload: newStatus,
}));

export const saveProfileInfo = createAction('app/saveProfileInfo', (profile: IEditProfileForm) => ({
  payload: profile,
}));
