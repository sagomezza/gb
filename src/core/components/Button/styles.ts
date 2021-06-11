import { StyleSheet } from 'react-native';
import { nlz, rs } from 'utils/dimensions';
import { theme } from '../../../config/theme';

const baseLabelStyle = {
  fontSize: 16,
  letterSpacing: 0,
  fontWeight: theme.fonts.regular.fontWeight,
  fontFamily: theme.fonts.regular.fontFamily,
  marginHorizontal: 0,
  marginVertical: 0,
  margin: 0,
};

export const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    marginHorizontal: rs(7),
  },
  buttonContainerBorder: {
    justifyContent: 'center',
    marginHorizontal: rs(7),
    borderColor: theme.colors.primaryButtonColor,
  },
  labelStylePrimary: {
    color: theme.colors.white,
    fontSize: nlz(17),
    fontWeight: theme.fonts.regular.fontWeight,
    fontFamily: theme.fonts.regular.fontFamily,
  },
  labelStyleBorder: {
    color: theme.colors.primaryButtonColor,
    fontSize: nlz(17),
    fontWeight: theme.fonts.regular.fontWeight,
    fontFamily: theme.fonts.regular.fontFamily,
  },
  labelStyleSecondary: {
    color: theme.colors.white,
    fontSize: nlz(16),
    fontWeight: theme.fonts.regular.fontWeight,
    fontFamily: theme.fonts.regular.fontFamily,
  },
  labelStyleOutlined: {
    color: theme.colors.primary,
    fontSize: rs(16),
    fontWeight: theme.fonts.regular.fontWeight,
    fontFamily: theme.fonts.regular.fontFamily,
  },
  contentStylePrimary: {
    height: rs(60),
    justifyContent: 'center',
    marginHorizontal: rs(7),
  },
  contentStyleSecondary: {
    height: rs(48),
  },
  contentStyleLink: {
    height: rs(25),
    marginHorizontal: 0,
    marginVertical: 0,
  },
  contentStyleOutlined: {
    height: rs(48),
  },
  labelStyleWithRegular: {
    ...baseLabelStyle,
    fontWeight: theme.fonts.regular.fontWeight,
  },
  labelStyleWithMedium: {
    ...baseLabelStyle,
    fontWeight: theme.fonts.medium.fontWeight,
  },
});
