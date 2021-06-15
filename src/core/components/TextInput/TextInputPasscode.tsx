/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { TextInput as TextPaperInput } from 'react-native-paper';
import { theme } from 'config/theme';
import { PassCodeContainer, styles } from './styles';

export const TextInputHidden = (props) => {
  const { children, style } = props;
  return (
    <TextPaperInput {...props} style={[styles.zeroSizes, style]}>
      {children}
    </TextPaperInput>
  );
};

const Input = (props) => {
  const { children, style } = props;
  return (
    <TextPaperInput
      mode="outlined"
      placeholderTextColor={theme.colors.beige}
      theme={{
        colors: {
          primary: theme.colors.onPrimary,
          placeholder: theme.colors.gray4,
        },
      }}
      {...props}
      style={[styles.passInput, style]}
    >
      {children}
    </TextPaperInput>
  );
};

interface ITextInputPasscodeProps {
  onChange: (value: string) => void;
  secureTextEntry?: boolean;
  value?: string;
}

export const TextInputPasscode = (props: ITextInputPasscodeProps) => {
  const { onChange, secureTextEntry, value } = props;

  const [data, setData] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
  });

  useEffect(() => {
    onChange(data.input1.concat(data.input2).concat(data.input3).concat(data.input4));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleOnChangeText = (newValue: string, input: string) =>
    setData({ ...data, [input]: newValue });

  return (
    <PassCodeContainer>
      <Input
        maxLength={1}
        secureTextEntry={secureTextEntry}
        value={value?.slice(0, 1)}
        onChangeText={(value: string) => handleOnChangeText(value, 'input1')}
      />
      <Input
        maxLength={1}
        secureTextEntry={secureTextEntry}
        value={value?.slice(1, 2)}
        onChangeText={(value: string) => handleOnChangeText(value, 'input2')}
      />
      <Input
        maxLength={1}
        secureTextEntry={secureTextEntry}
        value={value?.slice(2, 3)}
        onChangeText={(value: string) => handleOnChangeText(value, 'input3')}
      />
      <Input
        maxLength={1}
        secureTextEntry={secureTextEntry}
        value={value?.slice(3, 4)}
        onChangeText={(value: string) => handleOnChangeText(value, 'input4')}
      />
    </PassCodeContainer>
  );
};

interface ITextInput6DigitProps {
  onChange: (value: string) => void;
  value?: string;
}

export const TextInput6Digit = (props: ITextInput6DigitProps) => {
  const [data, setData] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
  });

  const { onChange, value } = props;

  useEffect(() => {
    onChange(
      data.input1
        .concat(data.input2)
        .concat(data.input3)
        .concat(data.input4)
        .concat(data.input5)
        .concat(data.input6),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleOnChangeText = (newValue: string, input: string) => {
    setData({ ...data, [input]: newValue });
  };

  return (
    <PassCodeContainer>
      <Input
        maxLength={1}
        value={value?.slice(0, 1)}
        onChangeText={(value: string) => handleOnChangeText(value, 'input1')}
      />
      <Input
        maxLength={1}
        value={value?.slice(1, 2)}
        onChangeText={(value: string) => handleOnChangeText(value, 'input2')}
      />
      <Input
        maxLength={1}
        value={value?.slice(2, 3)}
        onChangeText={(value: string) => handleOnChangeText(value, 'input3')}
      />
      <Input
        maxLength={1}
        value={value?.slice(3, 4)}
        onChangeText={(value: string) => handleOnChangeText(value, 'input4')}
      />
      <Input
        maxLength={1}
        value={value?.slice(4, 5)}
        onChangeText={(value: string) => handleOnChangeText(value, 'input5')}
      />
      <Input
        maxLength={1}
        value={value?.slice(5, 6)}
        onChangeText={(value: string) => handleOnChangeText(value, 'input6')}
      />
    </PassCodeContainer>
  );
};
