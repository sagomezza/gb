import React, { Dispatch, ReactElement } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/Octicons';
import { theme } from 'config/theme';
import { GOOGLE_PLACES_API } from '@env';
import { googlePlacesStyles } from './styles';

navigator.geolocation = require('react-native-geolocation-service');

interface IGooglePlacesInput {
  radius: number;
  setLocation: Dispatch<any>;
}

const GooglePlacesInput: React.FC<IGooglePlacesInput> = ({
  radius,
  setLocation,
}: IGooglePlacesInput): ReactElement => (
  <GooglePlacesAutocomplete
    currentLocation
    fetchDetails
    currentLocationLabel="Nerby Gyms"
    enablePoweredByContainer={false}
    filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
    GooglePlacesSearchQuery={{
      rankby: 'prominence',
      type: 'gym',
      radius,
    }}
    listViewDisplayed="auto"
    minLength={2}
    nearbyPlacesAPI="GooglePlacesSearch"
    placeholder="Search"
    query={{
      key: GOOGLE_PLACES_API,
      language: 'en',
      types: 'establishment',
      components: 'country:us',
      radius,
    }}
    renderLeftButton={() => <Icon color="gray" name="search" size={18} />}
    styles={googlePlacesStyles}
    textInputProps={{ placeholderTextColor: theme.colors.placeholder }}
    onPress={(data, details = null) => {
      // 'details' is provided when fetchDetails = true
      setLocation({
        data,
        details,
        location: {
          latitude: details?.geometry?.location.lat,
          longitude: details?.geometry?.location.lng,
        },
      });
    }}
  />
);
export default GooglePlacesInput;
