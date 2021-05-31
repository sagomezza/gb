import React from "react";
import { LinkButton } from "components";
import { useNavigation } from "@react-navigation/native";
import { RotuesMain } from "config/routes";

const SKIP_BUTTON_LABEL = "Skip";

const SkipButton: React.FC = () => {
  const navigation = useNavigation();

  return (
    <LinkButton onPress={() => navigation.navigate(RotuesMain.HOME)}>
      {SKIP_BUTTON_LABEL}
    </LinkButton>
  );
};

export default SkipButton;
