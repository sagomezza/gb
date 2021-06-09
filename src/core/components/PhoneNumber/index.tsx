/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { TextInput } from "react-native";
import { CaptionLabel } from "../Caption";
import {
  ContainerText,
  ContainerInput,
  ContainerWrapper,
  TextInputNumber,
} from "./styles";

const PhoneNumber = (props) => {
  const { textLabel } = props;
  return (
    <ContainerWrapper>
      <ContainerText>
        <CaptionLabel>{textLabel}</CaptionLabel>
      </ContainerText>

      <ContainerInput>
        <TextInputNumber
          {...props}
          render={(renderProps) => <TextInput {...renderProps} />}
        />
      </ContainerInput>
    </ContainerWrapper>
  );
};

export default PhoneNumber;
