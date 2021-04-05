import React, { useState, useEffect, useRef } from 'react';
import { TextInput as TextPaperInput } from 'react-native-paper';
import styled from 'styled-components/native';
import { theme } from 'config/theme';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const TextInputHidden = (props) => (
  <TextPaperInput {...props} style={[{ width: 0, height: 0 }, props.style]}>
    {props.children}
  </TextPaperInput>
);

const Input = (props) => (
  <TextPaperInput
    mode="outlined"
    placeholderTextColor="#C1BFBF"
    theme={{ colors: { primary: theme.colors.onPrimary, placeholder: '#C4C4C4' } }}
    {...props}
    style={[
      {
        height: 90,
        width: 55,
        textAlign: 'center',
        // marginRight: 5,
        fontFamily: theme.fonts.regular.fontFamily,
        fontWeight: theme.fonts.regular.fontWeight,
        color: theme.colors.text,
        backgroundColor: theme.colors.white,
        fontSize: 28,
      },
      props.style,
    ]}
  >
    {props.children}
  </TextPaperInput>
);

type TextInputPasscodeProps = {
  value?: string;
  secureTextEntry?: boolean;
  onChange: (value: string) => void;
};
export const TextInputPasscode = (props: TextInputPasscodeProps) => {
  const [data, setData] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
  });

  const onChange = (newValue: string, input: string) => setData({ ...data, [input]: newValue });

  useEffect(() => {
    props.onChange(data.input1.concat(data.input2).concat(data.input3).concat(data.input4));
  }, [data]);

  return (
    <Container>
      <Input
        maxLength={1}
        value={props.value?.slice(0, 1)}
        secureTextEntry={props.secureTextEntry}
        onChangeText={(value: string) => onChange(value, 'input1')}
      />
      <Input
        maxLength={1}
        value={props.value?.slice(1, 2)}
        secureTextEntry={props.secureTextEntry}
        onChangeText={(value: string) => onChange(value, 'input2')}
      />
      <Input
        maxLength={1}
        value={props.value?.slice(2, 3)}
        secureTextEntry={props.secureTextEntry}
        onChangeText={(value: string) => onChange(value, 'input3')}
      />
      <Input
        maxLength={1}
        value={props.value?.slice(3, 4)}
        secureTextEntry={props.secureTextEntry}
        onChangeText={(value: string) => onChange(value, 'input4')}
      />
    </Container>
  );
};

type TextInput6DigitProps = {
  value?: string;
  onChange: (value: string) => void;
};
export const TextInput6Digit = (props: TextInput6DigitProps) => {
  const [data, setData] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
  });

  const onChange = (newValue: string, input: string) => {
    setData({ ...data, [input]: newValue });
  };

  useEffect(() => {
    props.onChange(
      data.input1
        .concat(data.input2)
        .concat(data.input3)
        .concat(data.input4)
        .concat(data.input5)
        .concat(data.input6),
    );
  }, [data]);

  return (
    <Container>
      <Input
        value={props.value?.slice(0, 1)}
        maxLength={1}
        onChangeText={(value: string) => onChange(value, 'input1')}
      />
      <Input
        value={props.value?.slice(1, 2)}
        maxLength={1}
        onChangeText={(value: string) => onChange(value, 'input2')}
      />
      <Input
        value={props.value?.slice(2, 3)}
        maxLength={1}
        onChangeText={(value: string) => onChange(value, 'input3')}
      />
      <Input
        value={props.value?.slice(3, 4)}
        maxLength={1}
        onChangeText={(value: string) => onChange(value, 'input4')}
      />
      <Input
        value={props.value?.slice(4, 5)}
        maxLength={1}
        onChangeText={(value: string) => onChange(value, 'input5')}
      />
      <Input
        value={props.value?.slice(5, 6)}
        maxLength={1}
        onChangeText={(value: string) => onChange(value, 'input6')}
      />
    </Container>
  );
};
