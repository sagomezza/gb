import React from "react";
import { View } from "react-native";
import { InputLabel, ProfileInput } from "./styles";

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
}: IInputProps) => (
  <View>
    <InputLabel size={13}>{label}</InputLabel>
    <ProfileInput
      defaultValue={defaultValue}
      placeholder={placeholder}
      value={value}
      onTextChange={onChange}
    />
  </View>
);

export default Input;
