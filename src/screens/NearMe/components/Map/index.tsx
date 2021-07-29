/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ViewStyle } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import { AnimatedRegion, PROVIDER_GOOGLE, MapStyleElement, MapEvent } from 'react-native-maps';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { resetActiveSpot } from 'store/spots/spotsActions';
import { useSelector, useDispatch } from 'react-redux';
import { getActiveSpot } from 'store/spots/spotsSelectors';
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
  onMarkerPress: (spot: Spot | Place) => void;
  radius?: number;
  spots: Spot[];
  unSelectSpot: (event: MapEvent) => void;
}

const Map = ({
  containerStyles,
  getMapRef,
  location,
  mapStyles,
  onMarkerPress,
  radius = 5000,
  spots,
  unSelectSpot,
}: IMapProps): ReactElement => {
  const url = `${URL_MAPS_NEARBY_SEARCH}location=${location.latitude},${location.longitude}&radius=${radius}&type=gym&key=${GOOGLE_MAPS_API_KEY}`;
  const activeSpot = useSelector(getActiveSpot);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const [places, setPlaces] = useState([]);
  const dispatch = useDispatch();
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

  const showBottomSheet = useCallback(() => {
    bottomSheetModalRef?.current?.present();
  }, []);

  const closeBottomSheet = () => {
    dispatch(resetActiveSpot());
    bottomSheetModalRef?.current?.dismiss();
  };

  const renderMarkers = (spotsData: Spot[]) =>
    spotsData.map((spot: Spot) => (
      <SpotMarker
        key={spot.id}
        coordinates={spot.coordinates}
        spot={spot}
        onMarkerPress={(pressedSpot) => {
          onMarkerPress(pressedSpot);
          showBottomSheet();
        }}
      />
    ));

  const renderPlacesMarkers = (places: Place[]) =>
    places.map((place: Place) => (
      <PlaceMarker
        key={place.place_id}
        place={place}
        onMarkerPress={(pressedPlace) => {
          onMarkerPress(pressedPlace);
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
              unSelectSpot(event);
              bottomSheetModalRef.current.dismiss();
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
          {searchRoute()}
        </StyledMapView>

        <BottomSheetModal ref={bottomSheetModalRef} index={1} snapPoints={snapPoints}>
          {renderMapCard()}
        </BottomSheetModal>
      </Container>
    </BottomSheetModalProvider>
  );
};

export default Map;
