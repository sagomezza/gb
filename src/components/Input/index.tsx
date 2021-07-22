/* eslint-disable react/jsx-props-no-spreading */
import { TextInputProps } from 'react-native';
import { theme } from 'config/theme';
import InsetShadow from 'react-native-inset-shadow';
import React from 'react';
import { InsetShadowContainerStyles, NoShadowContainer, PaddedTextInput } from './styles';

export interface IInputProps extends TextInputProps {
  useShadow?: boolean;
}

const Input = ({ useShadow = true, ...otherProps }: IInputProps) => {
  if (useShadow) {
    return (
      <InsetShadow
        containerStyle={InsetShadowContainerStyles}
        shadowOffset={5}
        shadowOpacity={0.125}
        shadowRadius={2.5}
      >
        <PaddedTextInput placeholderTextColor={theme.colors.gray0} {...otherProps} />
      </InsetShadow>
    );
  }

  return (
    <NoShadowContainer>
      <PaddedTextInput placeholderTextColor={theme.colors.gray0} {...otherProps} />
    </NoShadowContainer>
  );
};

export default Input;
