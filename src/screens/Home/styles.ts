import { rs } from 'utils/dimensions';
import { FlatList, View } from 'react-native';
import BaseGradient from 'components/BaseGradient';
import styled from 'styled-components/native';

export const BackgroundGradient = styled(BaseGradient)``;

export const Separator = styled(View)`
  margin-bottom: ${rs(12)}px;
  margin-top: ${rs(12)}px;
`;

export const SizedFlatList = styled(FlatList).attrs(() => ({
  contentContainerStyle: {
    paddingBottom: rs(80),
  },
}))`
  padding-horizontal: ${rs(32)}px;
  padding-top: ${rs(16)}px;
`;
