/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { View, TextInput } from 'react-native';
import { TextInputNumberDate, TextInputDateError } from './styles';
import { Label } from './Label';

export const TextInputDate = (props) => {
  const { errorMsg, hasError, textLabel } = props;
  return (
    <View>
      <Label textLabel={textLabel} />
      <TextInputNumberDate {...props} render={(renderProps) => <TextInput {...renderProps} />} />
      {!!hasError && (
        <TextInputDateError color="error" size={11}>
          {errorMsg}
        </TextInputDateError>
      )}
    </View>
  );
};
