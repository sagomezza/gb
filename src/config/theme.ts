// @ts-nocheck
import { DefaultTheme, configureFonts } from 'react-native-paper';
import * as typography from 'utils/typography';

const fontConfig = {
  default: {
    regular: {
      fontFamily: typography.FONT_FAMILY_REGULAR,
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: typography.FONT_FAMILY_BOLD,
      fontWeight: 'normal',
    },
    light: {
      fontFamily: typography.FONT_FAMILY_LIGHT,
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: typography.FONT_FAMILY_EXTRA_LIGHT,
      fontWeight: 'normal',
    },
  },
};

fontConfig.ios = fontConfig.default;
fontConfig.android = fontConfig.default;

const colors = {
  ...DefaultTheme.colors,
  white: '#ffffff',
  primary: '#00AEFF',
  onPrimary: '#008BFF',
  secondary: '#3CC7AD',
  onSecondary: '#3CC7AD',
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
  gray0: '#AAAAAA',
  gray1: '#A6A3A3',
  gray2: '#545454',
  gray3: '#626262',
  gray4: '#C4C4C4',
  gray5: '#545454',
  lightBlue: '#E4EFF8',
  lighterGrey: '#D3D2D6',
  lightGrey: '#cccccc',
  orange: '#F88C02',
  greenPrimary: '#57e2c8',
  backgroundFbImage: '#085CA7',
  grayPlaceholder: '#C2C2C2',
  darkGreen: '#213c46',
  darkGreenModal: '#3ea997',
  textModal: '#525252',
  gradientColors: ['#42BAA4', '#203944'],
  darkGreenSecondary: '#3ea997',
};

export const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  roundness: 5,
  colors,
  animation: {
    scale: 2,
  },
  bottomNavigationBar: {
    iconColor: '#CEEFFF',
    activeIconColor: '#FFFFFF',
    backgroundColor: '#00AEFF',
  },
  input: {
    border: '#dddddd',
    placeholder: '#626262',
  },
  menu: {
    backgroundColor: '#FFFFFF',
    borderColor: '#BDBDBD',
    shadowColor: 'rgba(0,0,0,0.25)',
  },
  menuActiveOption: {
    backgroundColor: 'rgba(0,174,255,0.15)',
  },
  onboardingScreen: {
    backgroundColor: colors.beige,
    controlsDotSize: 10,
    descriptionColor: colors.black,
    descriptionSize: 12,
    titleColor: colors.primary,
    titleSize: 40,
  },
};

export const themePaperBar = {};

export type Theme = typeof theme;
