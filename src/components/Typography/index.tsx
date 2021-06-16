import React from 'react';
import { rs } from 'utils/dimensions';
import { StyledText } from './styles';
import { TypographyProps } from './types';

const Typography = ({ children, ...props }: TypographyProps) =>
  // eslint-disable-next-line react/jsx-props-no-spreading
  !children ? null : <StyledText {...props}>{children}</StyledText>;

Typography.defaultProps = {
  children: null,
  color: 'black',
  margin: 0,
  marginEnd: 0,
  marginStart: 0,
  lineSpacing: undefined,
  size: rs(12),
  style: {},
  textAlign: 'left',
  variant: 'regular',
};

export default Typography;
