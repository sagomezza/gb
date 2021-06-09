import styled from "styled-components";
import { StyleSheet } from "react-native";
import { Typography, PrimaryButton, TextInput } from "core/components";

import { rs } from "utils/dimensions";

export const NameLabel = styled(Typography)`
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: ${rs(35)}px;
`;

export const EmailLabel = styled(Typography)`
  margin-bottom: ${rs(5)}px;
  margin-top: ${rs(5)}px;
`;

export const SignOutButton = styled(PrimaryButton)`
  margin-bottom: ${rs(5)}px;
  margin-top: ${rs(40)}px;
  min-width: ${rs(250)}px;
`;

export const EditionLinkContainer = styled.View`
  align-items: center;
  border-bottom-color: #707070;
  border-bottom-width: 0.25px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${rs(12)}px;
  margin-top: ${rs(12)}px;
  padding-bottom: ${rs(15)}px;
  padding-right: ${rs(12)}px;
  width: 100%;
`;

export const EditionLinkLabel = styled(Typography)``;

export const styles = StyleSheet.create({
  mainScrollViewContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: rs(30),
    paddingTop: rs(30),
  },
});

export const SampleView = styled.View`
  padding: ${rs(40)}px;
  padding-bottom: ${rs(5)}px;
  padding-top: ${rs(20)}px;
  width: 100%;
`;

export const InputLabel = styled(Typography)`
  margin-bottom: ${rs(5)}px;
`;

export const ProfileInput = styled(TextInput)`
  margin-left: ${rs(5)}px;
`;

export const LineBreak = styled.View`
  margin-top: ${rs(20)}px;
`;
