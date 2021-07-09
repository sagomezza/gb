import { Text, View } from 'react-native';
import styled from 'styled-components';
import { nlz, rs } from 'utils/dimensions';

export const HeaderContainer = styled(View)`
  align-items: center;
  border-bottom-color: ${({ theme: { colors } }) => colors.lighterGrey};
  border-bottom-width: 1px;
  flex-direction: row;
  height: ${rs(48)}px;
  justify-content: center;
  width: 100%;
`;

export const Title = styled(Text)`
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(16)}px;
`;
