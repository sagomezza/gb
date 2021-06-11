import styled from 'styled-components';
import { ScrollView, View, Text } from 'react-native';
import Container from 'core/components/Container';
import { rs } from 'utils/dimensions';

export const StyleguideContainer = styled(Container)`
  flex: 1;
`;

export const MainScrollView = styled(ScrollView)`
  padding-left: ${() => rs(10)}px;
  padding-right: ${() => rs(10)}px;
`;

export const StyleguideTitle = styled(Text)`
  color: #000;
  font-size: ${() => rs(12)}px;
  font-weight: 700;
  margin-bottom: ${() => rs(20)}px;
  margin-top: ${() => rs(40)}px;
`;

export const Color = styled(View)`
  background-color: ${({ color }) => color};
  birder-style: solid;
  border-color: #f2f2f2;
  border-radius: ${() => rs(50)}px;
  border-width: 1;
  height: ${() => rs(40)}px;
  margin-bottom: ${() => rs(10)}px;
  margin-right: ${() => rs(15)}px;
  width: ${() => rs(40)}px;
`;

export const StyleguideColorsContainer = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
`;
