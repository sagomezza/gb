import styled from 'styled-components/native';
import { rs } from 'utils/dimensions';

export const TogglerContainer = styled.View`
  padding-horizontal: ${rs(20)}px;
  padding-vertical: ${rs(12)}px;
`;

export const TogglerRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleLabel = styled.Text`
  color: ${({ theme: { colors } }) => colors.black};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${rs(19)}px;
  font-weight: ${({ theme: { fonts } }) => fonts.regular.fontWeight};
`;

export const Separator = styled.View`
  background-color: ${({ theme: { colors } }) => colors.lightGrey};
  height: ${rs(1)}px;
  margin-vertical: ${rs(24)}px;
  width: 100%;
`;
