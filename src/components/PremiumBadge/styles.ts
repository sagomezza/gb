import { Text, View } from 'react-native';
import styled from 'styled-components';
import { nlz, rs } from 'utils/dimensions';

export const PremiumBadgeContainer = styled(View)`
  align-items: center;
  flex-direction: row;
`;

export const PremiumLabel = styled(Text)`
  color: ${({ theme: { colors } }) => colors.secondary};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(12)}px;
  margin-left: ${rs(8)}px;
`;
