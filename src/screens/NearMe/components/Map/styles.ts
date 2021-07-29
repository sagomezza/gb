import { Animated, Marker } from 'react-native-maps';
import styled from 'styled-components/native';
import { rs } from 'utils/dimensions';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  z-index: 0;
`;

export const StyledMapView = styled(Animated)`
  height: 100%;
  width: 100%;
`;

export const MarkerStyled = styled(Marker)`
  width: ${rs(320)}px;
  z-index: -1;
`;
