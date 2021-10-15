import React, { ReactElement } from 'react';
import { MarkerAnimated } from 'react-native-maps';
import { Spot } from 'store/types';
import UserMarker from '../../../../../assets/imgs/UserSpot.svg';
import GymMarker from '../../../../../assets/imgs/GymSpot.svg';

export interface IMarkerProps {
  coordinates: { latitude: number; longitude: number };
  onMarkerPress: () => void;
  spot: Spot;
}

const markerDisplay = (spot) => {
  if (spot && spot.type === 'User') {
    return <UserMarker height={50} width={50} />;
  }
  return <GymMarker height={50} width={50} />;
};

export default ({ coordinates, onMarkerPress, spot }: IMarkerProps): ReactElement => (
  <MarkerAnimated key={spot.id} coordinate={coordinates} onPress={() => onMarkerPress()}>
    {markerDisplay(spot)}
  </MarkerAnimated>
);
