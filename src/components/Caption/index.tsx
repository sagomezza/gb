/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Caption as CaptionPaper } from 'react-native-paper';
import styled from 'styled-components/native';
import { theme } from 'config/theme';

const StyledCaptionPaper = styled(CaptionPaper)`
  color: ${(props: any) => props.color || theme.colors.text};
  font-family: ${theme.fonts.medium.fontFamily};
  font-size: 16px;
  font-weight: 400;
  line-height: 18.75px;
  text-align: ${(props: any) => (props.center ? 'center' : 'left')};
  width: ${(props: any) => (props.maxWidth ? `${props.maxWidth}px` : 'auto')};

  ${(props: any) => (props.center ? 'margin: 0 auto;' : '')};
`;

// const StyledCaptionPaperButton = styled(StyledCaptionPaper)`
//   font-size: 16px;
// `;

const StyledCaptionPaper14 = styled(StyledCaptionPaper)`
  font-size: 14px;
  line-height: 16.41px;
`;

const StyledCaptionPaper12 = styled(StyledCaptionPaper)`
  font-size: 12px;
  line-height: 14.06px;
`;

export const Caption = (props) => {
  const { children } = props;
  return <StyledCaptionPaper {...props}>{children}</StyledCaptionPaper>;
};
export const CaptionButton = (props) => {
  const { children } = props;
  return <StyledCaptionPaper {...props}>{children}</StyledCaptionPaper>;
};
export const Caption14 = (props) => {
  const { children } = props;
  return <StyledCaptionPaper14 {...props}>{children}</StyledCaptionPaper14>;
};
export const Caption12 = (props) => {
  const { children } = props;
  return <StyledCaptionPaper12 {...props}>{children}</StyledCaptionPaper12>;
};

const GreyCaption12 = styled(Caption12)`
  color: #6d6d6d;
`;

export const CaptionLabel = (props) => {
  const { children } = props;
  return <GreyCaption12>{children}</GreyCaption12>;
};
