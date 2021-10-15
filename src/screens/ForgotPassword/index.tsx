import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SnackBar } from 'components';
import ScreensHeader from 'components/ScreensHeader';
import { useAuth } from 'service/authentication.service';
import { IForgotPasswordData } from 'store/types';
import { useRoute } from '@react-navigation/native';
import { SubmitHandler } from 'react-hook-form';
import { AuthAmplifyDictionary } from 'diccionaries/auth.diccionaries';
import { ModalAlert } from 'components/ModalAlert';
import { showModalAlert, hideModalAlert } from 'store/app/appActions';
import { useDispatch, useSelector } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import { getModalAlertState } from 'store/app/appSelectors';
import { toggleAuthLoader } from 'store/auth/authActions';
import { Container, styles } from './styles';
import Form from './components/Form';

const ForgotPasswordScreen: React.FC = () => {
  const alertModal = useSelector(getModalAlertState);
  const dispatch = useDispatch();
  const route: any = useRoute();
  const { forgotPasswordSubmit } = useAuth();
  const [toast, setToast] = useState({ label: '', message: '', visible: false });

  const onConfirmHandler: SubmitHandler<IForgotPasswordData> = async (
    data: IForgotPasswordData,
  ) => {
    dispatch(hideModalAlert());

    NetInfo.fetch().then(async (state) => {
      if (!state.isConnected) {
        dispatch(
          showModalAlert({
            title: 'Error',
            text: 'Internet connection not available',
            textButton: 'Ok',
            type: 'error',
            visible: true,
          }),
        );
      } else {
        dispatch(toggleAuthLoader(true));

        const email = route?.params?.email;
        const response: any = await forgotPasswordSubmit({
          code: data.pinCode,
          password: data.password,
          username: email,
        });

        const errorResponse = (await response) && response.code;
        const message = (await response) && response.code ? response.code : response;
        const existCode = AuthAmplifyDictionary(await message);

        if (errorResponse && existCode) {
          setToast({
            label: 'OK',
            message: response?.message,
            visible: true,
          });
          dispatch(toggleAuthLoader(false));

          return;
        }
        dispatch(toggleAuthLoader(false));

        dispatch(
          showModalAlert({
            title: 'Well Done',
            text: `New password has been set successfully`,
            textButton: 'OK',
            type: 'confirmPassword',
            visible: true,
          }),
        );
      }
    });
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <Container>
        <ScreensHeader isGoBack />
        <Form onPress={onConfirmHandler} />
        <SnackBar toast={toast} />
      </Container>
      <ModalAlert
        hideModal={() => dispatch(hideModalAlert())}
        text={alertModal.text}
        textButton={alertModal.textButton}
        title={alertModal.title}
        type={alertModal.type}
        visible={alertModal.visible}
        onDismiss={() => dispatch(hideModalAlert())}
      />
    </KeyboardAwareScrollView>
  );
};
export default ForgotPasswordScreen;
