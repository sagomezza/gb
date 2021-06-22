import { theme } from 'config/theme';
import React from 'react';
import { ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type LinearGradientProps = {
  children: React.ReactNode | React.ReactNodeArray;
  style: ViewStyle;
};

const BaseGradient = ({ children, style }: LinearGradientProps) => (
  <LinearGradient colors={theme.colors.gradientColors} style={style}>
    {children}
  </LinearGradient>
);

export default BaseGradient;
