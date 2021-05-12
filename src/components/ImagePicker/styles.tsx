import styled from "styled-components/native";
import { Button } from "react-native-paper";
import Typography from "components/Typography";

export const Fallback = styled.View`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  flex: 1;
  justify-content: center;
`;

export const ButtonsCard = styled.View`
  align-items: center;
  background-color: white;
  border-radius: 20px;
  elevation: 5;
  min-height: 300px;
  min-width: 300px;
  padding: 35px;
  width: 80%;
`;

export const CardTitle = styled(Typography)`
  margin-bottom: 20px;
`;

export const OptionButton = styled(Button).attrs({
  color: "gray",

})`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  height: 55px;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const OptionButtonContentStyle = {
  color: "gray",
  display: "flex",
  flexDirection: "row",
  height: "100%",
  justifyContent: "center",
  width: "100%",
};
