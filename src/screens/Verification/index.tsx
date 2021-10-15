import React from 'react';
import routes from 'config/routes';
import { navigator } from 'navigation';
import { SnackBar, Spacing } from 'components';
import { ModalAlert } from 'components/ModalAlert';
import { AuthAmplifyDictionary, Messages } from 'diccionaries/auth.diccionaries';
import { useAuth } from 'service/authentication.service';
import { getUserAuth } from 'store/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { delay } from 'utils/delay';
import { showModalAlert, hideModalAlert } from 'store/app/appActions';
import { getModalAlertState } from 'store/app/appSelectors';
import ScreensHeader from 'components/ScreensHeader';
import { VerificationContainer, LinkContainer, BoldText, SendCode } from './styles';
import Form from './components/Form';
import { ICodeData } from './components/Types/types';

const VerificationScreen: React.FC = () => {
  const { goToPage } = navigator();
  const [toast, setToast] = React.useState({ label: '', message: '', visible: false });
  const [loading, setLoading] = React.useState(false);
  const user = useSelector(getUserAuth);
  const { confirmSignUp, resendSignUp } = useAuth();
  const alertModal = useSelector(getModalAlertState);
  const dispatch = useDispatch();

  const { email } = user;

  const onSubmit = async (data: ICodeData) => {
    setLoading(true);
    const response = await confirmSignUp({
      code: data?.Code,
      username: email,
      user,
    });

    const errorResponse = (await response) && response.code;
    const message = response && response.message ? response.message : response;
    const existMessage = AuthAmplifyDictionary(message);

    if (errorResponse || existMessage) {
      setToast({
        label: 'OK',
        message: response?.message,
        visible: true,
      });
      setLoading(false);

      return;
    }
    delay(5000);
    dispatch(
      showModalAlert({
        title: 'Register successful!',
        text: `Press 'Ok' to be redirected to Login screen`,
        textButton: 'Ok',
        type: 'confirmSignup',
        visible: true,
      }),
    );
  };

  const OnCloseModal = () => {
    dispatch(hideModalAlert());
    setLoading(false);
    goToPage(routes.LOGIN);
  };

  const resendCode = async () => {
    const response = await resendSignUp({
      username: email,
    });

    const errorResponse = (await response) && response.code;
    const message = (await response) && response.message ? response.message : response;
    const existMessage = AuthAmplifyDictionary(message);

    if (errorResponse || existMessage) {
      setToast({
        label: 'OK',
        message: response?.message,
        visible: true,
      });
      return;
    }

    setToast({
      label: 'OK',
      message: Messages.codeSent,
      visible: true,
    });
  };
  return (
    <VerificationContainer>
      <Spacing size={40} />
      <ScreensHeader isGoBack />
      <Spacing size={32} />
      <BoldText size={21} variant="extraBold">
        We sent you a code verification to {email}
      </BoldText>
      <Spacing size={32} />
      <LinkContainer onPress={resendCode}>
        <SendCode>Resend the code</SendCode>
      </LinkContainer>
      <Spacing size={32} />
      <Form loading={loading} onSubmit={onSubmit} />
      <SnackBar toast={toast} />
      <ModalAlert
        hideModal={OnCloseModal}
        text={alertModal.text}
        textButton={alertModal.textButton}
        title={alertModal.title}
        type={alertModal.type}
        visible={alertModal.visible}
        onDismiss={OnCloseModal}
      />
    </VerificationContainer>
  );
};

export default VerificationScreen;
