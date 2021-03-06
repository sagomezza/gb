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
  onSecondary: '#E0F8F4',
  text: '#545454',
  error: '#CE2B15',
  // activeBlue: '#329cfc',
  // almostWhite: '#fffffe', // for shadows
  beige: '#F9F9F9',
  black: '#000000',
  borderColor: '#DCDCDC',
  green: '#78ab78',
  darkBlue: '#0033A0',
  disabled: '#B8B8B8',
  gray0: '#AAAAAA',
  gray1: '#A6A3A3',
  gray2: '#545454',
  gray3: '#626262',
  gray4: '#C4C4C4',
  gray5: '#545454',
  grayAgenda: '#D5D5D5',
  grayCalendarBorder: '#C8C7CC',
  lightBlue: '#E4EFF8',
  lighterGrey: '#E4E3E5',
  lightGrey: '#cccccc',
  orange: '#F88C02',
  greenPrimary: '#57e2c8',
  backgroundFbImage: '#085CA7',
  grayPlaceholder: '#C2C2C2',
  darkGreen: '#213c46',
  darkGreenModal: '#3ea997',
  textModal: '#525252',
  gradientColors: ['#42BAA4', '#203944'],
  darkGreenNewMessage: '#16575D',
  darkGreenSecondary: '#3ea997',
  greenSecondary: '#3BC0A7',
  greenSecondaryAgenda: '#17545B',
  chipBlue: '#F0F5FF',
  subtitleColorText: '#979797',
  graySlider: '#E0DFDF',
  primaryBlur: '#e0fcff',
  darkerBeige: '#F1F1F1',
  dayNotSelected: '#9D9D9D',
  paragraphText: '#807474',
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
  text: {
    darkGray: '#525252',
    lightGray: '#797777',
    red: '#E93613',
    orange: '#3CC7AD',
  },
  switch: {
    borderColor: '#CFCFCF',
    backgroundActive: '#F1F1F1',
    backgroundInactive: '#F1F1F1',
    circleActiveColor: '#3CC7AD',
    circleInActiveColor: '#3CC7AD',
  },
  onboardingScreen: {
    backgroundColor: colors.beige,
    controlsDotSize: 10,
    descriptionColor: colors.black,
    descriptionSize: 12,
    titleColor: colors.primary,
    titleSize: 40,
  },
  codeField: {
    background: '#F4F4F4',
    label: '#8E8E8E',
    border: '#E4E4E4',
  },
};

export const themePaperBar = {};

export type Theme = typeof theme;
