import React from 'react';
import { theme } from 'config/theme';
import { Color, StyleguideColorsContainer } from './styles';

export { StyleguideTitle } from './styles';

export const StyleguideColors = () => (
  <StyleguideColorsContainer>
    <Color color={theme.colors.white} />
    <Color color={theme.colors.primary} />
    <Color color={theme.colors.secondary} />
    <Color color={theme.colors.gray3} />
    <Color color={theme.colors.black} />
    <Color color={theme.colors.error} />
    <Color color={theme.colors.green} />
    <Color color={theme.colors.text} />
  </StyleguideColorsContainer>
);
