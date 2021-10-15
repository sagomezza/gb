// Libs
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getUserToken } from 'store/auth/authSelectors';
import { useAuth } from 'service/authentication.service';
import { saveUserInfo, saveUserToken } from 'store/auth/authActions';
import RNBootSplash from 'react-native-bootsplash';
import MainStackNavigator from './MainStackNavigator';
import AuthNavigator from './AuthNavigator';

const AppNavigator: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const token = useSelector(getUserToken);
  const { getCurrentSessionUser } = useAuth();
  const [logged, setLogged] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const init = async () => {
      const session = await getCurrentSessionUser();
      if (session?.accessToken?.jwtToken) {
        setLogged(true);
        await dispatch(saveUserInfo({ email: session.idToken?.payload?.email }));
        await dispatch(
          saveUserToken({
            token: `Bearer ${session?.accessToken?.jwtToken}`,
            userId: session?.idToken?.payload?.sub,
          }),
        );
      } else {
        setLogged(false);
      }
      setLoading(false);
    };

    init().finally(() => {
      RNBootSplash.hide({ fade: true });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <>
      {!loading && (
        <NavigationContainer>
          {logged ? <MainStackNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      )}
    </>
  );
};

export default AppNavigator;
