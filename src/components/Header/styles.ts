import { Text, View } from 'react-native';
import styled from 'styled-components';
import { nlz, rs } from 'utils/dimensions';

export const HeaderContainer = styled(View)`
  align-items: center;
  border-bottom-color: ${({ theme: { colors } }) => colors.lighterGrey};
  border-bottom-width: 2px;
  flex-direction: row;
  height: ${rs(48)}px;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const Title = styled(Text)`
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(16)}px;
`;

export const PremiumBadgeAbsoluteContainer = styled(View)`
  align-items: center;
  flex-direction: row;
  height: 100%;
  padding-bottom: ${rs(3)}px;
  position: absolute;
  right: ${rs(18)}px;
`;
