import styled from 'styled-components/native';
import { nlz, rs } from 'utils/dimensions';

export const SendIconContainer = styled.View`
  align-self: flex-start;
  right: ${rs(10)}px;
`;

export const CardContainer = styled.View`
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: 10px;
  elevation: 5;
  flex-direction: row;
  height: ${rs(100)}px;
  margin-horizontal: ${rs(20)}px;
  margin-vertical: ${rs(10)}px;
  padding-bottom: ${rs(5)}px;
  padding-horizontal: ${rs(10)}px;
  shadow-color: #0e3d43;
  shadow-offset: 0 5px;
  shadow-opacity: 0.3;
  shadow-radius: 2.5px;
  width: 90%;
`;

export const DetailsContainer = styled.View`
  flex: 1;
  margin-bottom: ${rs(5)}px;
  margin-left: ${rs(15)}px;
`;

export const CardTitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContactPhoto = styled.Image`
  border-radius: 30px;
  height: ${rs(60)}px;
  margin-horizontal: ${rs(2)}px;
  width: ${rs(60)}px;
`;

export const ContactName = styled.Text`
  color: #16575d;
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(16)}px;
  font-weight: 600;
`;

export const ContactDetail = styled.Text`
  color: ${({ theme: { colors } }) => colors.placeholder};
  font-family: ${({ theme: { fonts } }) => fonts.light.fontFamily};
  font-size: ${nlz(13)}px;
  font-weight: ${({ theme: { fonts } }) => fonts.light.fontWeight};
  margin-bottom: ${rs(2)}px;
  text-align: justify;
`;

export const FirstLineDetailContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const MapIconContainer = styled.View`
  bottom: ${rs(2)}px;
  margin-left: ${rs(2)}px;
  margin-right: ${rs(1)}px;
`;
