// REACT
import React from 'react';

// COMPONENTS
import { Subheading as SubheadingPaper } from 'react-native-paper';

// STYLES
import styled from 'styled-components';
import { theme } from 'config/theme';

const StyledSubheadingPaper = styled(SubheadingPaper)`
  font-family: ${theme.fonts.medium.fontFamily};
  color: ${theme.colors.text};
  font-weight: ${(props: any) => props.fontWeight || 400};
  font-size: 21px;
  width: ${(props: any) => (props.maxWidth ? `${props.maxWidth}px` : 'auto')};
  text-align: ${(props: any) => (props.center ? 'center' : 'left')};

  ${(props: any) => (props.center ? 'margin: 0 auto;' : '')};
`;

export const Subheading = (props) => (
  <StyledSubheadingPaper {...props}>{props.children}</StyledSubheadingPaper>
);
