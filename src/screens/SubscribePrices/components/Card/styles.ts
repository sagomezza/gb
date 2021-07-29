import { PrimaryButton } from 'components/Button';
import { theme } from 'config/theme';
import styled from 'styled-components/native';
import { nlz, rs, W } from 'utils/dimensions';

export const ButtonSubscribe = styled(PrimaryButton).attrs(() => ({
  labelStyle: {
    color: theme.colors.white,
    fontFamily: theme.fonts.regular.fontFamily,
    fontWeight: '700',
    fontSize: nlz(14),
  },
}))`
  background-color: ${({ theme: { colors } }) => colors.secondary};
  height: ${rs(50)}px;
  justify-content: center;
  width: ${rs(140)}px;
  border-radius: 40px;
`;

export const CardText = styled.Text`
  color: ${({ theme: { colors } }) => colors.subtitleColorText};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(18)}px;
  font-weight: ${({ theme: { fonts } }) => fonts.regular.fontWeight};
`;

export const CardFooter = styled.Text`
  color: ${({ theme: { colors } }) => colors.subtitleColorText};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(10)}px;
  font-weight: 700;
`;

export const CardPrice = styled.Text`
  color: ${({ theme: { colors } }) => colors.black};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(22)}px;
  font-weight: 600;
`;

export const CardContainer = styled.View`
  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: 14px;
  elevation: 10;
  height: ${rs(132)}px;
  justify-content: center;
  margin-horizontal: ${rs(20)}px;
  shadow-color: ${({ theme: { colors } }) => colors.black};
  shadow-offset: 0 4px;
  shadow-opacity: 0.34;
  shadow-radius: 6.27px;
  width: ${W * 0.9}px;
`;

export const ItemsContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export const PriceContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const TextContainer = styled.View`
  margin-left: ${rs(10)}px;
`;
