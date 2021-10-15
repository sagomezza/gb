/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ViewStyle } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import { AnimatedRegion, PROVIDER_GOOGLE, MapStyleElement } from 'react-native-maps';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { Place, Spot } from 'store/types';
import {
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
  URL_MAPS_NEARBY_SEARCH,
} from 'screens/NearMe/utils/constants';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import UserCard from '../UserCard';
import SpotMarker from '../Marker';
import { Container, MarkerStyled, StyledMapView } from './styles';
import GymCard from '../GymCard';
import PlaceMarker from '../PlaceMarker';

interface IMapProps {
  containerStyles?: ViewStyle | undefined;
  getMapRef: (ref: any) => void;
  location: { latitude: number; longitude: number };
  mapStyles?: MapStyleElement[] | undefined;
  radius?: number;
  spots: Spot[];
}

const activeSpotInitialState: Spot | Place = {
  place_id: '',
  address: '',
  age: 0,
  coordinates: { latitude: 0, longitude: 0 },
  email: '',
  gender: '',
  geometry: { location: { lat: 0, lng: 0 } },
  id: 0,
  interests: [],
  location: '',
  name: '',
  phone: '',
  picture: '',
  type: '',
};

const Map = ({
  containerStyles,
  getMapRef,
  location,
  mapStyles,
  radius = 5000,
  spots,
}: IMapProps): ReactElement => {
  const url = `${URL_MAPS_NEARBY_SEARCH}location=${location.latitude},${location.longitude}&radius=${radius}&type=gym&key=${GOOGLE_MAPS_API_KEY}`;
  const [activeSpot, setActiveSpot] = useState<Spot>(activeSpotInitialState);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const [places, setPlaces] = useState([]);
  const mapRef = useRef<typeof StyledMapView>(null);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['25%', '40%'], []);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const placesList = res.results;
        setPlaces(placesList);
      });
  }, [location]);

  useEffect(() => {
    getMapRef(mapRef);
  }, [mapRef, getMapRef]);

  useEffect(() => {
    searchRoute();
  }, [activeSpot]);

  const onMarkerPress = (spot: Spot) => {
    setActiveSpot(spot);
  };

  const showBottomSheet = useCallback(() => {
    bottomSheetModalRef?.current?.present();
  }, []);

  const closeBottomSheet = useCallback(() => {
    setActiveSpot(activeSpotInitialState);
    bottomSheetModalRef?.current?.dismiss();
  }, []);

  const renderMarkers = (spotsData: Spot[]) =>
    spotsData.map((spot: Spot) => (
      <SpotMarker
        key={spot.id}
        coordinates={spot.coordinates}
        spot={spot}
        onMarkerPress={() => {
          bottomSheetModalRef?.current?.dismiss();
          setActiveSpot(spot);
          if (spot.type === 'Gym') showBottomSheet();
        }}
      />
    ));

  const renderPlacesMarkers = (places: Spot[]) =>
    places.map((place: Spot) => (
      <PlaceMarker
        key={place.place_id}
        place={place}
        onMarkerPress={() => {
          onMarkerPress(place);
          showBottomSheet();
        }}
      />
    ));

  const searchRoute = () => {
    let destinationCoordinates = { latitude: 0, longitude: 0 };
    if (activeSpot.type === 'Gym') {
      destinationCoordinates = activeSpot.coordinates;
    }
    if (activeSpot.place_id) {
      const { lat, lng } = activeSpot.geometry.location;
      const coordinates = {
        latitude: lat,
        longitude: lng,
      };
      destinationCoordinates = coordinates;
    }
    return (
      <MapViewDirections
        apikey={GOOGLE_MAPS_API_KEY}
        destination={destinationCoordinates}
        origin={location}
        strokeWidth={0}
        onReady={(result) => {
          setDistance(result.distance);
          setDuration(result.duration);
        }}
      />
    );
  };

  const renderMapCard = () => {
    if (activeSpot.place_id || activeSpot.type === 'Gym') {
      let cardCoordinates = { latitude: 0, longitude: 0 };

      if (activeSpot.type === 'Gym') {
        cardCoordinates = activeSpot.coordinates;
      }
      if (activeSpot.place_id) {
        const { lat, lng } = activeSpot.geometry.location;
        const coordinates = {
          latitude: lat,
          longitude: lng,
        };
        cardCoordinates = coordinates;
      }
      return (
        <GymCard
          coordinates={cardCoordinates}
          distance={distance}
          duration={duration}
          name={activeSpot.name}
          onPressClose={closeBottomSheet}
        />
      );
    }
    return <></>;
  };

  return (
    <BottomSheetModalProvider>
      <Container style={containerStyles}>
        <StyledMapView
          ref={mapRef}
          customMapStyle={mapStyles}
          initialRegion={
            new AnimatedRegion({
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            })
          }
          provider={PROVIDER_GOOGLE}
          onPress={(event) => {
            if (event.nativeEvent.action !== 'marker-press') {
              closeBottomSheet();
            }
          }}
        >
          {renderMarkers(spots)}
          {renderPlacesMarkers(places)}
          {activeSpot.type === 'User' && (
            <MarkerStyled
              coordinate={{
                latitude: activeSpot.coordinates.latitude - 0.014,
                longitude: activeSpot.coordinates.longitude,
              }}
            >
              <UserCard item={activeSpot} />
            </MarkerStyled>
          )}
          {(activeSpot.place_id || activeSpot.type === 'Gym') && searchRoute()}
        </StyledMapView>

        <BottomSheetModal ref={bottomSheetModalRef} index={1} snapPoints={snapPoints}>
          {renderMapCard()}
        </BottomSheetModal>
      </Container>
    </BottomSheetModalProvider>
  );
};

export default Map;
