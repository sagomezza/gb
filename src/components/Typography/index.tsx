// REACT
import React from 'react';

// STYLES
import { StyledText } from './styles';

// TYPES
import { TypographyProps } from './types';

const Typography = ({ children, ...props }: TypographyProps) =>
  !children ? null : <StyledText {...props}>{children}</StyledText>;

Typography.defaultProps = {
  children: null,
  color: 'black',
  margin: 0,
  marginEnd: 0,
  marginStart: 0,
  lineSpacing: undefined,
  size: 12,
  style: {},
  textAlign: 'left',
  variant: 'regular',
};

export default Typography;
