/* eslint-disable no-console */
import React, { useState } from 'react';
import { GBScreenHeader, RadiusSlider, Spacing } from 'components';
import { TouchableOpacity } from 'react-native';
import { hideModalAlert, showModalAlert } from 'store/app/appActions';
import { useDispatch, useSelector } from 'react-redux';
import { ModalAlert } from 'components/ModalAlert';
import { getModalAlertState } from 'store/app/appSelectors';
import { removeUserToken, toggleAuthLoader } from 'store/auth/authActions';
import { useAuth } from 'service/authentication.service';
import { useQueryClient } from 'react-query';
import PrivacyTogggler from './components/PrivacyToggler';
import { Separator, TitleLabel, TogglerContainer } from './styles';
import { SafeAreaView } from '../styles';

const SettingsScreen = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const dispatch = useDispatch();
  const modalAlertState = useSelector(getModalAlertState);
  const { signOut } = useAuth();
  const queryClient = useQueryClient();

  const onSliderChange = (value) => {
    setSliderValue(value);
  };

  const onSlidingComplete = async (value) => {
    // TO DO
    console.log(value);
  };

  const handleLogOut = async () => {
    dispatch(
      showModalAlert({
        title: 'Close session',
        text: 'Are you sure you want to close your session?',
        textButton: 'Yes',
        type: 'confirmLogOut',
        visible: true,
      }),
    );
  };

  const onConfirmLogout = async () => {
    dispatch(toggleAuthLoader(true));
    queryClient.invalidateQueries();
    await signOut();
    dispatch(removeUserToken());
    dispatch(toggleAuthLoader(false));
  };

  return (
    <>
      <SafeAreaView>
        <GBScreenHeader title="Settings" />
        <TogglerContainer>
          <Spacing />
          <RadiusSlider
            maximumValue={100}
            value={sliderValue}
            onSlidingComplete={(value) => onSlidingComplete(value)}
            onValueChange={(value) => onSliderChange(value)}
          />
          <Spacing />
          <PrivacyTogggler />
          <Separator />
          <TouchableOpacity onPress={handleLogOut}>
            <TitleLabel>Log Out</TitleLabel>
          </TouchableOpacity>
        </TogglerContainer>
      </SafeAreaView>
      <ModalAlert
        hideModal={() => dispatch(hideModalAlert())}
        text={modalAlertState.text}
        textButton={modalAlertState.textButton}
        title={modalAlertState.title}
        type={modalAlertState.type}
        visible={modalAlertState.visible && modalAlertState.type !== 'content'}
        onDismiss={() => dispatch(hideModalAlert())}
        onSubmit={onConfirmLogout}
      />
    </>
  );
};

export default SettingsScreen;
