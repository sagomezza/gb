import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Alert, Linking, PermissionsAndroid, Platform, ToastAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { Region } from 'react-native-maps';

export const useRequestLocation = () => {
  const [currentLocation, setCurrentLocation] = useState<Region>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });
  const prevLocation = useRef({
    currentLocation: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0,
      longitudeDelta: 0,
    },
    lastLocation: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0,
      longitudeDelta: 0,
    },
    isMounted: true,
  }).current;

  const hasPermissionIOS = async () => {
    const openSetting = () => {
      Linking.openSettings().catch(() => {
        Alert.alert('Unable to open settings');
      });
    };
    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === 'granted') {
      return true;
    }

    if (status === 'denied') {
      Alert.alert('Location permission denied');
    }

    if (status === 'disabled') {
      Alert.alert(`Turn on Location Services to allow Curl - Gym to determine your location.`, '', [
        { text: 'Go to Settings', onPress: openSetting },
        { text: "Don't Use Location", onPress: () => {} },
      ]);
    }

    return false;
  };

  const hasLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const hasPermission = await hasPermissionIOS();
      return hasPermission;
    }

    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG);
    }

    return false;
  };

  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }
    try {
      await Geolocation.getCurrentPosition(
        (position) => {
          const regionFrom = (lat, lon, accuracy): Region => {
            const oneDegreeOfLongitudeInMeters = 111.32 * 1000;
            const circumference = (40075 / 360) * 1000;

            const latDelta = accuracy * (1 / (Math.cos(lat) * circumference));
            const lonDelta = accuracy / oneDegreeOfLongitudeInMeters;

            return {
              latitude: lat,
              longitude: lon,
              latitudeDelta: Math.max(0.01, latDelta),
              longitudeDelta: Math.max(0.01, lonDelta),
            };
          };
          const { accuracy, latitude, longitude } = position.coords;
          const latLng = regionFrom(latitude, longitude, accuracy);
          prevLocation.lastLocation = prevLocation.currentLocation;
          prevLocation.currentLocation = { ...latLng };
          if (prevLocation.isMounted) setCurrentLocation(latLng);
        },
        () => {
          // See error code charts below.
          // Todo console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
      );
    } catch (error) {
      // Todo catch errors console.log('Error eolocation ', error);
    }
  };

  const getLocationCallback = useCallback(async () => {
    await getLocation();
    Geolocation.stopObserving();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getLocationMemo = useMemo(() => {
    getLocationCallback();
    Geolocation.stopObserving();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getLocationCallback();

    return () => {
      prevLocation.lastLocation = prevLocation.currentLocation;
      prevLocation.isMounted = false;
      Geolocation.stopObserving();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    currentLocation,
    getLocation,
    getLocationCallback,
    getLocationMemo,
    hasLocationPermission,
  };
};
