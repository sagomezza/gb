/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Subheading as SubheadingPaper } from 'react-native-paper';
import styled from 'styled-components';
import { theme } from 'config/theme';

const StyledSubheadingPaper = styled(SubheadingPaper)`
  color: ${theme.colors.text};
  font-family: ${theme.fonts.medium.fontFamily};
  font-size: 21px;
  font-weight: ${(props: any) => props.fontWeight || 400};
  text-align: ${(props: any) => (props.center ? 'center' : 'left')};
  width: ${(props: any) => (props.maxWidth ? `${props.maxWidth}px` : 'auto')};

  ${(props: any) => (props.center ? 'margin: 0 auto;' : '')};
`;

export const Subheading = ({ children, ...otherProps }) => (
  <StyledSubheadingPaper {...otherProps}>{children}</StyledSubheadingPaper>
);
