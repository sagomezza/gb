import React from "react";
import { ActivityIndicator, View } from "react-native";
import Typography from "../Typography";

interface Props {
  spinnerColor: string;
  testID?: string;
  text: string;
}

const EmptyContent = ({ spinnerColor, testID, text }: Props) => (
  <View testID={testID}>
    {text ? (
      <Typography>{text}</Typography>
    ) : (
      <ActivityIndicator color={spinnerColor} />
    )}
  </View>
);

export default EmptyContent;
