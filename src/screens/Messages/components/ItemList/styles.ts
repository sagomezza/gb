import styled from "styled-components/native";
import { nlz, rs } from "utils/dimensions";

interface IPhotoBackgroundProps {
  background: string;
}

export const IconContainer = styled.View`
  margin-left: ${rs(10)}px;
`;

export const MessageContainer = styled.View`
  background-color: ${({ theme: { colors } }) => colors.white};
  flex-direction: row;
  margin-top: ${rs(10)}px;
  padding-vertical: ${rs(10)}px;
`;

export const DateContainer = styled.View`
  flex-direction: row;
`;

export const DetailsContainer = styled.View`
  flex: 1;
  margin-left: ${rs(10)}px;
`;

export const MessageTitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const PhotoBackground = styled.ImageBackground<IPhotoBackgroundProps>`
  align-items: center;
  background-color: ${(props) =>
    props.background ? props.background : "black"};
  border-radius: 25px;
  height: ${rs(50)}px;
  justify-content: center;
  margin-horizontal: ${rs(2)}px;
  width: ${rs(50)}px;
`;

export const ContactPhoto = styled.Image`
  border-radius: 25px;
  height: ${rs(50)}px;
  margin-horizontal: ${rs(2)}px;
  width: ${rs(50)}px;
`;

export const ContactName = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.medium.fontFamily};
  font-size: ${nlz(15)}px;
  font-weight: ${({ theme: { fonts } }) => fonts.medium.fontWeight};
`;

export const PhotoTitle = styled.Text`
  color: ${({ theme: { colors } }) => colors.white};
  font-family: ${({ theme: { fonts } }) => fonts.medium.fontFamily};
  font-size: ${nlz(24)}px;
  font-weight: ${({ theme: { fonts } }) => fonts.medium.fontWeight};
`;

export const LastMessage = styled.Text`
  color: ${({ theme: { colors } }) => colors.placeholder};
  font-family: ${({ theme: { fonts } }) => fonts.light.fontFamily};
  font-size: ${nlz(11)}px;
  font-weight: ${({ theme: { fonts } }) => fonts.light.fontWeight};
  text-align: justify;
`;

export const MessageDate = styled.Text`
  color: ${({ theme: { colors } }) => colors.placeholder};
  font-family: ${({ theme: { fonts } }) => fonts.light.fontFamily};
  font-size: ${nlz(12)}px;
  font-weight: ${({ theme: { fonts } }) => fonts.light.fontWeight};
`;
