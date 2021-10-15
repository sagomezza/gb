import Spacing from 'components/Spacing';
import React, { useEffect, useState } from 'react';
import { LatLng, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import {
  LATITUDE_DEFAULT,
  LATITUDE_DELTA,
  LONGITUDE_DEFAULT,
  LONGITUDE_DELTA,
} from 'screens/NearMe/utils/constants';
import { useRequestLocation } from 'hooks/useRequestLocation';
import { SafeAreaView } from 'screens/styles';
import { GBScreenHeader } from 'components';
import routes from 'config/routes';
import { mapData } from './utils/data-example';
import Map from './components/Map';
import { StyledMapView } from './components/Map/styles';
import { MapContainer, MapStyled, NearMeContainer, SearchContainer } from './styles';
import GooglePlacesInput from './components/GooglePlacesAutocomplete';

const NearMeScreen: React.FC = () => {
  const { currentLocation } = useRequestLocation();
  const [mapRef, setMapRef] = useState<typeof StyledMapView>();
  const [placeLocation, setPlaceLocation] = useState<LatLng | any>();
  const [regionCoordinates, setRegionCoordinates] = useState<Region | any>();
  const radius = 5000;

  const getMapRef = (ref: any) => {
    setMapRef(ref);
  };

  useEffect(() => {
    setRegionCoordinates({ ...currentLocation, ...placeLocation?.location });
  }, [currentLocation, placeLocation]);

  useEffect(() => {
    if (placeLocation) {
      mapRef.current.animateToRegion(placeLocation.location, 100);
    }
  }, [mapRef, placeLocation]);

  return (
    <SafeAreaView>
      <GBScreenHeader title={routes.NEARME} />
      <NearMeContainer>
        <SearchContainer>
          <GooglePlacesInput radius={radius} setLocation={setPlaceLocation} />
        </SearchContainer>
        <Spacing size={70} />
        <MapContainer>
          {!!regionCoordinates && !!currentLocation && currentLocation.latitude !== 0 ? (
            <Map
              getMapRef={getMapRef}
              location={mapData.location}
              radius={radius}
              spots={mapData.spots}
            />
          ) : (
            <MapStyled
              initialRegion={{
                latitude: LATITUDE_DEFAULT,
                longitude: LONGITUDE_DEFAULT,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}
              provider={PROVIDER_GOOGLE}
            />
          )}
        </MapContainer>
      </NearMeContainer>
    </SafeAreaView>
  );
};

export default NearMeScreen;
