import { theme } from 'config/theme';
import { FlatList, StyleSheet, View } from 'react-native';
import styled from 'styled-components';
import { rs } from 'utils/dimensions';

export const MainContainer = styled(View)`
  flex: 1;
  padding-top: ${rs(36)}px;
  width: 100%;
`;

export const TopNavigatorStyles = StyleSheet.create({
  containerStyle: {
    elevation: 0, // Removes border bottom on Android
    shadowOffset: {
      height: 0, // Removes border bottom on iOS
      width: 0,
    },
  },
  indicatorContainerStyle: {
    marginHorizontal: 22,
    paddingHorizontal: 22 * 2,
  },
  indicatorStyle: {
    backgroundColor: theme.colors.secondary,
    height: 3,
  },
  labelStyle: {
    fontFamily: theme.fonts.regular.fontFamily,
    fontSize: 22,
    fontWeight: 'bold',
    padding: 0,
    textTransform: 'none',
  },
  screensWrapper: {
    backgroundColor: theme.colors.white,
    paddingTop: rs(24),
    paddingHorizontal: 0,
  },
});

export const TopNavigatorBaseColors = {
  active: theme.colors.secondary,
  inactive: theme.colors.grayPlaceholder,
};

export const SizedFlatList = styled(FlatList)`
  padding-left: ${rs(32)}px;
  padding-right: ${rs(32)}px;
  padding-top: 0px;
`;

export const Separator = styled(View)`
  margin-bottom: ${rs(12)}px;
  margin-top: ${rs(12)}px;
`;

export const NewBulletinContainer = styled(View)`
  flex: 1;
  justify-content: space-between;
  padding-bottom: ${rs(32)}px;
  padding-left: ${rs(32)}px;
  padding-right: ${rs(32)}px;
  width: 100%;
`;

export const TitleInputContainer = styled(View)`
  height: ${rs(60)}px;
  margin-bottom: ${rs(24)}px;
  width: 100%;
`;

export const DescriptionInputContainer = styled(View)`
  height: ${rs(180)}px;
  margin-bottom: ${rs(16)}px;
  width: 100%;
`;

export const AddBulletinButtonContainer = styled(View)`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;
