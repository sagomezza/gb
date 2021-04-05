import React from 'react';
import { Paragraph as PaperElement } from 'react-native-paper';
import styled from 'styled-components/native';
import { theme } from 'config/theme';

const StyledParagraphPaper = styled(PaperElement)`
  font-family: ${theme.fonts.regular.fontFamily};
  color: #000000;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  color: ${(props: any) => props.color || theme.colors.text};
  width: ${(props: any) => (props.maxWidth ? `${props.maxWidth}px` : 'auto')};
  text-align: ${(props: any) => (props.center ? 'center' : 'left')};

  ${(props: any) => (props.center ? 'margin: 0 auto;' : '')};
`;

export const Paragraph = (props) => (
  <StyledParagraphPaper {...props}>{props.children}</StyledParagraphPaper>
);
