import { useCallback, useEffect, useState } from 'react';
import { Alert, Platform } from 'react-native';
import { request, check, PERMISSIONS, RESULTS, openSettings } from 'react-native-permissions';

const useCameraPermissions = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean>(false);
  const PERMISSION = Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;

  const updateHasCameraPermission = useCallback((value) => {
    setHasCameraPermission(value);
  }, []);

  const checkCameraPermissions = useCallback(() => {
    check(PERMISSION)
      .then((result) => {
        if (result === RESULTS.GRANTED) {
          updateHasCameraPermission(true);
        } else {
          updateHasCameraPermission(false);
        }
      })
      .catch(() => {
        updateHasCameraPermission(false);
      });
  }, [PERMISSION, updateHasCameraPermission]);

  useEffect(() => {
    checkCameraPermissions();
  }, [checkCameraPermissions]);

  const requestCameraPermissions = () =>
    request(PERMISSION)
      .then((result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            updateHasCameraPermission(false);
            return false;
          case RESULTS.DENIED:
            updateHasCameraPermission(false);
            return false;
          case RESULTS.LIMITED:
            updateHasCameraPermission(false);
            return false;
          case RESULTS.GRANTED:
            updateHasCameraPermission(true);
            return true;
          case RESULTS.BLOCKED:
            updateHasCameraPermission(false);
            showSettingsAlert();
            return false;
          default:
            updateHasCameraPermission(false);
            return false;
        }
      })
      .catch(() => {
        updateHasCameraPermission(false);
        return false;
      });

  const showSettingsAlert = () => {
    Alert.alert(
      'Change Permissions in Settings',
      'Open SETTINGS to Manually set\nPermissions to use Camera in this application.',
      [
        { text: 'Go to Settings', onPress: openAppSettings },
        { text: 'Ok', onPress: () => {} },
      ],
    );
  };

  const showErrorAlert = () => {
    Alert.alert('Settings', 'Cannot open settings.');
  };

  const openAppSettings = () => {
    openSettings().catch(() => showErrorAlert());
  };

  return { hasCameraPermission, requestCameraPermissions, checkCameraPermissions };
};

export default useCameraPermissions;
