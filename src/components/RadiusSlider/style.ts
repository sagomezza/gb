import styled from 'styled-components';
import { theme } from '../../config/theme';
import { nlz, rs } from '../../utils/dimensions';

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-horizontal: ${rs(16)}px;
`;

export const TitleSlider = styled.Text`
  color: ${theme.colors.black};
  font-family: ${theme.fonts.medium.fontFamily};
  font-size: ${nlz(16)}px;
  font-weight: bold;
`;

export const TextMaxSlider = styled.Text`
  color: ${theme.colors.black};
  font-family: ${theme.fonts.medium.fontFamily};
  font-size: ${nlz(14)}px;
  font-weight: ${theme.fonts.medium.fontWeight};
`;

export const ValueSlider = styled.Text`
  color: ${theme.colors.black};
  font-family: ${theme.fonts.light.fontFamily};
  font-size: ${nlz(12)}px;
  font-weight: ${theme.fonts.light.fontWeight};
  margin-top: ${rs(14)}px;
`;
