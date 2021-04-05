import React from 'react';
import styled from 'styled-components/native';
import imageSource from './assets/alert-circle.png';

const Image = styled.Image`
  width: 66px;
  height: 66px;
  align-self: center;
`;

const WarningIcon = (props) => <Image {...props} source={imageSource} />;

export default WarningIcon;
