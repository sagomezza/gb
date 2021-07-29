import Spacing from 'components/Spacing';
import React, { useEffect, useState } from 'react';
import { Place, Spot } from 'store/types';
import { useDispatch } from 'react-redux';
import { resetActiveSpot, setActiveSpot } from 'store/spots/spotsActions';
import { LatLng, Region } from 'react-native-maps';
import { useRequestLocation } from 'hooks/useRequestLocation';
import { SafeAreaView } from 'screens/styles';
import { Header } from 'components';
import routes from 'config/routes';
import { mapData } from './utils/data-example';
import Map from './components/Map';
import { StyledMapView } from './components/Map/styles';
import { MapContainer, NearMeContainer, SearchContainer } from './styles';
import GooglePlacesInput from './components/GooglePlacesAutocomplete';

const NearMeScreen: React.FC = () => {
  const { currentLocation } = useRequestLocation();
  const [mapRef, setMapRef] = useState<typeof StyledMapView>();
  const [placeLocation, setPlaceLocation] = useState<LatLng | any>();
  const [regionCoordinates, setRegionCoordinates] = useState<Region | any>();
  const radius = 5000;
  const dispatch = useDispatch();

  const getMapRef = (ref: any) => {
    setMapRef(ref);
  };

  const onMarkerPress = (spot: Spot | Place) => {
    dispatch(setActiveSpot(spot));
  };
  const unSelectSpot = () => {
    dispatch(resetActiveSpot());
  };

  useEffect(() => {
    dispatch(resetActiveSpot());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <Header route={routes.NEARME} />
      <NearMeContainer>
        <SearchContainer>
          <GooglePlacesInput radius={radius} setLocation={setPlaceLocation} />
        </SearchContainer>
        <Spacing size={70} />
        {!!regionCoordinates && !!currentLocation && currentLocation.latitude !== 0 && (
          <MapContainer>
            <Map
              getMapRef={getMapRef}
              location={currentLocation}
              radius={radius}
              spots={mapData.spots}
              unSelectSpot={unSelectSpot}
              onMarkerPress={onMarkerPress}
            />
          </MapContainer>
        )}
      </NearMeContainer>
    </SafeAreaView>
  );
};

export default NearMeScreen;
