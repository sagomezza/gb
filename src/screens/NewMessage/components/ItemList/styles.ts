import styled from 'styled-components/native';
import { nlz, rs } from 'utils/dimensions';

interface IPhotoBackgroundProps {
  background: string;
}

export const IconContainer = styled.View`
  align-self: flex-end;
`;

export const PaddedContainer = styled.View`
  padding-horizontal: ${rs(16)}px;
`;

export const MessageContainer = styled.View`
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: 10px;
  elevation: 5;
  flex-direction: row;
  height: ${rs(120)}px;
  margin-vertical: ${rs(10)}px;
  padding-bottom: ${rs(5)}px;
  padding-horizontal: ${rs(10)}px;
  shadow-color: #0e3d43;
  shadow-offset: 0 5px;
  shadow-opacity: 0.3;
  shadow-radius: 2.5px;
  width: 100%;
`;

export const DetailsContainer = styled.View`
  flex: 1;
  margin-bottom: ${rs(5)}px;
  margin-left: ${rs(15)}px;
`;

export const MessageTitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const PhotoBackground = styled.ImageBackground<IPhotoBackgroundProps>`
  align-items: center;
  background-color: ${(props) => (props.background ? props.background : 'black')};
  border-radius: 35px;
  height: ${rs(70)}px;
  justify-content: center;
  margin-horizontal: ${rs(2)}px;
  width: ${rs(70)}px;
`;

export const ContactPhoto = styled.Image`
  border-radius: 35px;
  height: ${rs(70)}px;
  margin-horizontal: ${rs(2)}px;
  width: ${rs(70)}px;
`;

export const ContactName = styled.Text`
  color: ${({ theme: { colors } }) => colors.darkGreenNewMessage};
  font-family: ${({ theme: { fonts } }) => fonts.medium.fontFamily};
  font-size: ${nlz(16)}px;
  font-weight: bold;
`;

export const PhotoTitle = styled.Text`
  color: ${({ theme: { colors } }) => colors.white};
  font-family: ${({ theme: { fonts } }) => fonts.medium.fontFamily};
  font-size: ${nlz(20)}px;
  font-weight: ${({ theme: { fonts } }) => fonts.medium.fontWeight};
`;

export const ContactDetail = styled.Text`
  color: ${({ theme: { colors } }) => colors.placeholder};
  font-family: ${({ theme: { fonts } }) => fonts.light.fontFamily};
  font-size: ${nlz(12)}px;
  font-weight: ${({ theme: { fonts } }) => fonts.light.fontWeight};
  text-align: justify;
`;

export const FirstLineDetailContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;
