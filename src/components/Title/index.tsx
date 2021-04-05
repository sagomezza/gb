import React from 'react';
import { Title as TitlePaper } from 'react-native-paper';
import styled from 'styled-components/native';
import { theme } from 'config/theme';

const StyledTitlePaper = styled(TitlePaper)`
  font-family: ${theme.fonts.medium.fontFamily};
  color: ${theme.colors.primary};
  font-weight: 700;
  font-size: 28px;

  width: ${(props: any) => (props.maxWidth ? `${props.maxWidth}px` : 'auto')};
  text-align: ${(props: any) => (props.center ? 'center' : 'left')};

  ${(props: any) => (props.center ? 'margin: 0 auto;' : '')};
`;

export const Title = (props) => <StyledTitlePaper {...props}>{props.children}</StyledTitlePaper>;
