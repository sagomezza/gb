import { rs } from 'utils/dimensions';
import { FlatList, View } from 'react-native';
import BaseGradient from 'components/BaseGradient';
import styled from 'styled-components/native';

export const BackgroundGradient = styled(BaseGradient)``;

export const Separator = styled(View)`
  margin-bottom: ${rs(12)}px;
  margin-top: ${rs(12)}px;
`;

export const SizedFlatList = styled(FlatList)`
  padding-bottom: ${rs(64)}px;
  padding-left: ${rs(32)}px;
  padding-right: ${rs(32)}px;
  padding-top: ${rs(16)}px;
`;
