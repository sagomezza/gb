// REDUX
import { createAction } from '@reduxjs/toolkit';

export const showModalAlert = createAction(
  'app/showModalAlert',
  ({
    text,
    textButton,
    title,
    type,
    visible,
  }: {
    text: string;
    textButton: string;
    title: string;
    type: string;
    visible: boolean;
  }) => ({
    payload: { title, text, textButton, type, visible },
  }),
);

export const hideModalAlert = createAction('app/hideModalAlert');
