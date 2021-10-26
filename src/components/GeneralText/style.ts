import styled from 'styled-components/native';
import { theme } from 'config/theme';
import { nlz, rs } from 'utils/dimensions';

export const Terms = styled.View`
  margin-vertical: ${rs(20)}px;
`;

export const TermsContent = styled.View`
  margin: ${rs(20)}px;
`;

export const TermsContentText = styled.Text`
  color: ${theme.colors.paragraphText};
  font-family: ${theme.fonts.regular.fontFamily};
  font-size: ${nlz(16)}px;
  font-weight: ${theme.fonts.regular.fontWeight};
  text-align: justify;
`;

export const TermsFooter = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const TermsFooterText = styled.Text`
  color: ${theme.colors.paragraphText};
`;

export const StyledSubheading = styled.Text`
  color: ${theme.colors.black};
  font-family: ${theme.fonts.medium.fontFamily};
  font-size: ${nlz(19)}px;
  font-weight: ${theme.fonts.medium.fontWeight};
  letter-spacing: 0.8px;
`;
