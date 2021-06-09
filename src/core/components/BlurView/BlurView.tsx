import * as React from "react";
import { View, ViewProps } from "react-native";

interface IBlurViewProps extends ViewProps {
  intensity: number;
  tint: "light" | "dark";
}

const BlurView: React.FC<IBlurViewProps> = ({
  intensity,
  tint,
  ...rest
}: IBlurViewProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <View {...rest} />
);
export default BlurView;
