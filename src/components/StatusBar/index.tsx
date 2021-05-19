import React from "react";
import { StatusBar as StatusBarRN } from "react-native";
import { theme } from "config/theme";

export const StatusBar = () => (
  <StatusBarRN
    networkActivityIndicatorVisible
    translucent
    backgroundColor={theme.colors.onPrimary}
    barStyle="light-content"
  />
);
