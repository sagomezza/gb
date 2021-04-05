// @ts-nocheck
import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    white: '#ffffff',
    primary: '#00AEFF',
    onPrimary: '#008BFF',
    secondary: '#FF8C00',
    onSecondary: '#FF6E22',
    text: '#545454',
    error: '#CE2B15',
    // activeBlue: '#329cfc',
    // almostWhite: '#fffffe', // for shadows
    beige: '#F9F9F9',
    black: '#000000',
    borderColor: '#DCDCDC',
    green: '#78ab78',
    darkBlue: '#004472',
    disabled: '#B8B8B8',
    gray1: '#A6A3A3',
    gray2: '#545454',
    gray3: '#626262',
    gray4: '#C4C4C4',
    gray5: '#545454',
    lightBlue: '#E4EFF8',
    lighterGrey: '#dddddd',
    lightGrey: '#cccccc',
    orange: '#F88C02',
  },
  animation: {
    scale: 2,
  },
  bottomNavigationBar: {
    iconColor: '#CEEFFF',
    activeIconColor: '#FFFFFF',
    backgroundColor: '#00AEFF',
  },
  menu: {
    backgroundColor: '#FFFFFF',
    borderColor: '#BDBDBD',
    shadowColor: 'rgba(0,0,0,0.25)',
  },
  menuActiveOption: {
    backgroundColor: 'rgba(0,174,255,0.15)',
  },
};

export const themePaperBar = {};

export type Theme = typeof theme;
