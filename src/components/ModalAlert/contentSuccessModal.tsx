import React from 'react';
import Spacing from 'components/Spacing';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { theme } from 'config/theme';
import routes from 'config/routes';
import { useNavigation } from '@react-navigation/native';
import { hideModalAlert } from 'store/app/appActions';
import { useDispatch } from 'react-redux';
import { TextAlert, ContainerContentModal, TitleInput, ButtonModal } from './styles';

type ContentModalSuccessProps = {
  data?: string;
  text: string;
  textButton: string;
  title: string;
  type: string;
};

const ContentModalSuccess = ({ data, text, textButton, title, type }: ContentModalSuccessProps) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onPressHandler = () => {
    dispatch(hideModalAlert());
    if (type === 'confirmForgot') {
      navigation.navigate(routes.FORGOTPASSWORD, { email: data });
    } else {
      navigation.navigate(routes.LOGIN);
    }
  };

  return (
    <ContainerContentModal>
      <Icon color={theme.colors.darkGreenModal} name="check-circle" size={60} />
      <TitleInput>{title}</TitleInput>
      <Spacing />
      <TextAlert>{text}</TextAlert>
      <Spacing />
      {type.includes('confirm') && <ButtonModal onPress={onPressHandler}>{textButton}</ButtonModal>}
    </ContainerContentModal>
  );
};

export default ContentModalSuccess;
