import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { TextInputNumber } from './TextInputNumber';
import { Label } from './Label';
// COMPONENTS
import Typography from 'components/Typography';
import { TextInput } from 'react-native';

export const TextInputDate = (props) => {
  return (
    <View>
      <Label textLabel={props?.textLabel} />
      <TextInputNumber
        style={{
          flexGrow: 1,
          width: '100%',
          maxHeight: 50,
        }}
        {...props}
        render={(renderProps) => <TextInput {...renderProps} />}
      />
      {!!props.hasError && (
        <Typography color="error" size={11} style={{ marginTop: 16 }}>
          {props.errorMsg}
        </Typography>
      )}
    </View>
  );
};
