import styled from 'styled-components/native';
import { nlz, rs, W } from 'utils/dimensions';

export const SubscribePricesTitle = styled.Text`
  color: ${({ theme: { colors } }) => colors.black};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(20)}px;
  font-weight: 600;
  margin-vertical: ${rs(10)}px;
  text-align: center;
`;

export const SubscribePricesSubtitle = styled.Text`
  color: ${({ theme: { colors } }) => colors.subtitleColorText};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(16)}px;
  font-weight: ${({ theme: { fonts } }) => fonts.regular.fontWeight};
  margin-horizontal: ${rs(24)}px;
  text-align: center;
`;

export const SubscribePricesFooter = styled.Text`
  color: ${({ theme: { colors } }) => colors.subtitleColorText};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(12)}px;
  font-weight: ${({ theme: { fonts } }) => fonts.regular.fontWeight};
  margin-horizontal: ${rs(14)}px;
  text-align: center;
`;

export const CancelSubcriptionText = styled.Text`
  color: ${({ theme: { colors } }) => colors.subtitleColorText};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(10)}px;
  font-weight: 700;
  text-align: center;
`;

export const LinkText = styled.Text`
  color: ${({ theme: { colors } }) => colors.secondary};
  font-family: ${({ theme: { fonts } }) => fonts.medium.fontFamily};
  font-size: ${nlz(20)}px;
  font-weight: 700;
  text-decoration: underline;
  text-decoration-color: ${({ theme: { colors } }) => colors.secondary};
`;

export const SubscribePricesContainer = styled.View`
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.white};
  flex: 1;
  justify-content: space-around;
`;

export const LinkContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: ${W}px;
`;
