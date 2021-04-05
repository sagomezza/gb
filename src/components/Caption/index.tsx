import React from 'react';
import { Caption as CaptionPaper } from 'react-native-paper';
import styled from 'styled-components/native';
import { theme } from 'config/theme';

const StyledCaptionPaper = styled(CaptionPaper)`
  font-family: ${theme.fonts.medium.fontFamily};
  font-weight: 400;
  font-size: 16px;
  line-height: 18.75px;
  color: ${(props: any) => props.color || theme.colors.text};
  width: ${(props: any) => (props.maxWidth ? `${props.maxWidth}px` : 'auto')};
  text-align: ${(props: any) => (props.center ? 'center' : 'left')};

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

export const Caption = (props) => (
  <StyledCaptionPaper {...props}>{props.children}</StyledCaptionPaper>
);
export const CaptionButton = (props) => (
  <StyledCaptionPaper {...props}>{props.children}</StyledCaptionPaper>
);
export const Caption14 = (props) => (
  <StyledCaptionPaper14 {...props}>{props.children}</StyledCaptionPaper14>
);
export const Caption12 = (props) => (
  <StyledCaptionPaper12 {...props}>{props.children}</StyledCaptionPaper12>
);

export const CaptionLabel = (props) => (
  <Caption12 style={{ color: '#6D6d6D' }}>{props.children}</Caption12>
);
