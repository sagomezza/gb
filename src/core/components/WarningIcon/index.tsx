/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components/native';
import imageSource from './assets/alert-circle.png';

const Image = styled.Image`
  align-self: center;
  height: 66px;
  width: 66px;
`;

const WarningIcon = (props) => <Image {...props} source={imageSource} />;

export default WarningIcon;
