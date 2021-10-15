import { Platform } from 'react-native';
import { Animated, MarkerAnimated } from 'react-native-maps';
import styled from 'styled-components/native';
import { rs } from 'utils/dimensions';

export const SearchContainer = styled.View`
  margin-top: ${Platform.OS === 'ios' ? rs(16) : rs(10)}px;
  padding-bottom: ${rs(10)}px;
  padding-horizontal: ${rs(20)}px;
  position: absolute;
  width: 100%;
  z-index: 100;
`;

export const MapContainer = styled.View`
  flex: 1;
  z-index: 0;
`;

export const NearMeContainer = styled.View`
  background-color: ${({ theme: { colors } }) => colors.white};
  flex: 1;
`;

export const MarkerAnimatedStyled = styled(MarkerAnimated)`
  z-index: -10;
`;

export const MapStyled = styled(Animated)`
  flex: 1;
`;
