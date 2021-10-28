// Libs
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getUserToken } from 'store/auth/authSelectors';
import { useAuth } from 'service/authentication.service';
import { saveUserInfo, saveUserToken } from 'store/auth/authActions';
import RNBootSplash from 'react-native-bootsplash';
import { getUserQuery } from 'service/queries';
import { getEditProfileState } from 'store/app/appSelectors';
import { ActivityIndicator } from 'components';
import MainStackNavigator from './MainStackNavigator';
import AuthNavigator from './AuthNavigator';
import OnBoardingSkillsNavigator from './OnBoardingSkillsNavigator';

const AppNavigator: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const token = useSelector(getUserToken);
  const { getCurrentSessionUser } = useAuth();
  const [userID, setUserID] = useState();
  const [logged, setLogged] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState([]);
  const editProfileState = useSelector(getEditProfileState);

  const { isLoading } = getUserQuery(
    { id: userID },
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        if (!editProfileState) setCategories(data?.getUser?.setting?.categories);
      },
    },
  );

  const renderNavigator = () => {
    if (logged) {
      if (categories.length === 0) {
        return <OnBoardingSkillsNavigator />;
      }
      return <MainStackNavigator />;
    }
    return <AuthNavigator />;
  };

  useEffect(() => {
    const init = async () => {
      const session = await getCurrentSessionUser();
      if (session?.accessToken?.jwtToken) {
        setLogged(true);
        setUserID(session?.idToken?.payload?.sub);
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
          {isLoading ? <ActivityIndicator /> : renderNavigator()}
        </NavigationContainer>
      )}
    </>
  );
};

export default AppNavigator;
