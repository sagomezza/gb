import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { nlz, rs, W } from 'utils/dimensions';

type LineProps = {
  isComplete?: boolean;
};

type TextButtonProps = {
  isTime?: boolean;
};

export const GymCardContainer = styled.View`
  background-color: #ffffffe6;
  height: ${rs(240)}px;
  padding-horizontal: ${rs(20)}px;
  width: ${W}px;
`;

export const GymNameContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${rs(10)}px;
`;

export const Line = styled.View<LineProps>`
  align-self: flex-end;
  border-bottom-width: 0.8px;
  border-color: #727272;
  width: ${(props) => (props.isComplete ? W * 0.89 : W * 0.72)}px;
`;

export const GymName = styled.Text`
  color: #16575d;
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(24)}px;
  font-weight: 600;
  text-align: left;
`;

export const DirectionsButton = styled(TouchableOpacity)`
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.greenPrimary};
  border-radius: 10px;
  flex-direction: row;
  height: ${rs(62)}px;
  justify-content: center;
  margin-horizontal: ${rs(20)}px;
`;

export const DistanceText = styled.Text`
  color: ${({ theme: { colors } }) => colors.textModal};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(12)}px;
  font-weight: ${({ theme: { fonts } }) => fonts.regular.fontWeight};
  text-align: left;
  top: ${rs(5)}px;
`;

export const TextButton = styled.Text<TextButtonProps>`
  color: ${({ theme: { colors } }) => colors.white};
  font-family: ${({ theme: { fonts } }) => fonts.medium.fontFamily};
  font-size: ${(props) => (props.isTime ? nlz(14) : nlz(20))}px;
  font-weight: 800;
  left: ${(props) => (props.isTime ? rs(12) : 0)}px;
  text-align: center;
`;

export const TripText = styled.Text`
  color: ${({ theme: { colors } }) => colors.textModal};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(16)}px;
  font-weight: ${({ theme: { fonts } }) => fonts.regular.fontWeight};
  margin-vertical: ${rs(12)}px;
  text-align: left;
`;
