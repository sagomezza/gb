import * as React from 'react';
// import NetInfo from '@react-native-community/netinfo';
// import { navigator } from 'navigation';
// import routes from 'config/routes';
// import { useDispatch } from 'react-redux';
// import { showAlertModal } from 'store/app/appActions';
import { ScrollView } from 'react-native';
import Spacing from 'components/Spacing';
import Form from './Form';
import {
  ContainerForm,
  ContainerSignup,
  ContainerText,
  HeaderBackground,
  HeaderSubtitle,
  HeaderTitle,
  SignupBody,
} from './styled';
import { IFormValuesSignup } from './types';

const backgroundHeader = require('../../../assets/imgs/BgHeader.png');

const SignupScreen: React.FC = () => {
  // const { goToPage } = navigator();
  // const dispatch = useDispatch();
  const onSignup = (data: IFormValuesSignup) => {
    // eslint-disable-next-line no-console
    console.log(data);
    /* NetInfo.fetch().then((state) => {
      if (!state.isConnected) {
        dispatch(
          showAlertModal({
            title: 'Error',
            text: 'Internet connection not available',
            textButton: 'Ok',
            type: 'error',
            visible: true,
          }),
        );
      } else {
        goToPage(routes.HOME, { data });
      }
    }); */
  };

  return (
    <ContainerSignup>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderBackground source={backgroundHeader}>
          <Spacing />
          <ContainerText>
            <HeaderTitle>Hello</HeaderTitle>
            <HeaderSubtitle>Create a new account</HeaderSubtitle>
          </ContainerText>
        </HeaderBackground>
        <SignupBody>
          <ContainerForm>
            <Form onSignup={onSignup} />
          </ContainerForm>
        </SignupBody>
      </ScrollView>
    </ContainerSignup>
  );
};

export default SignupScreen;
