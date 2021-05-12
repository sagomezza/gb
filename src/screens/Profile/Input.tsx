import React from 'react';
import { View } from 'react-native';
import { InputLabel, ProfileInput } from './styles';

interface IInputProps {
  defaultValue?: string;
  label: string;
  onChange: (newText: string) => void;
  placeholder?: string;
  value: string;
}

const Input: React.FC<IInputProps> = ({
  defaultValue,
  label,
  onChange,
  placeholder,
  value,
}: IInputProps) => {
  return (
    <View>
      <InputLabel size={13}>{label}</InputLabel>
      <ProfileInput
        defaultValue={defaultValue}
        onTextChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </View>
  );
}

export default Input;