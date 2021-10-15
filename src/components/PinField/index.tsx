/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { Container, NumberText, Label, Cell, styles } from './styles';
import { ICodeFieldProps } from './types';

const CELL_COUNT = 6;

const PinField: React.FC<ICodeFieldProps> = ({ onChangeValue, value }: ICodeFieldProps) => {
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue: onChangeValue,
  });

  const renderItem = (index, symbol, isFocused) => (
    <Cell key={index} onLayout={getCellOnLayoutHandler(index)}>
      <NumberText>{symbol || (isFocused ? <Cursor /> : undefined)}</NumberText>
    </Cell>
  );

  return (
    <Container>
      <Label>Please enter the verification code sent to your email</Label>
      <CodeField
        ref={ref}
        {...props}
        cellCount={CELL_COUNT}
        keyboardType="number-pad"
        renderCell={({ index, isFocused, symbol }) => renderItem(index, symbol, isFocused)}
        rootStyle={styles.codeFieldRoot}
        textContentType="oneTimeCode"
        value={value}
        onChangeText={onChangeValue}
      />
    </Container>
  );
};

export default PinField;
