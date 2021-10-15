import React, { ReactElement } from 'react';
import { MarkerAnimatedStyled } from 'screens/NearMe/styles';
import { Spot } from 'store/types';
import PlaceMarker from '../../../../../assets/imgs/PlaceMarker.svg';

export interface IPlaceMarkerProps {
  onMarkerPress: () => void;
  place: Spot;
}

export default ({ onMarkerPress, place }: IPlaceMarkerProps): ReactElement => {
  const { lat } = place.geometry.location;
  const { lng } = place.geometry.location;
  const coordinates = {
    latitude: lat,
    longitude: lng,
  };
  return (
    <MarkerAnimatedStyled coordinate={coordinates} onPress={() => onMarkerPress()}>
      <PlaceMarker height={50} width={50} />
    </MarkerAnimatedStyled>
  );
};
