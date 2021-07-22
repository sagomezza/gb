import styled from 'styled-components';
import { TextInput, ViewStyle, View } from 'react-native';
import { nlz, rs } from 'utils/dimensions';

export const PaddedTextInput = styled(TextInput)`
  font-size: ${nlz(16)}px;
  height: 100%;
  padding-bottom: ${rs(5)}px;
  padding-left: ${rs(12)}px;
  padding-right: ${rs(12)}px;
  padding-top: ${({ multiline }) => (multiline ? rs(16) : 0)}px;
  width: 100%;
`;

export const NoShadowContainer = styled(View)`
  border: 1px solid;
  border-color: ${({ theme: { colors } }) => colors.gray4};
  border-radius: ${rs(7)}px;
`;

export const InsetShadowContainerStyles: ViewStyle = {
  borderRadius: rs(7),
};
