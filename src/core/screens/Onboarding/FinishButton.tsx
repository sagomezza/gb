import React from 'react';
import { PrimaryButton } from 'core/components';
import { useNavigation } from '@react-navigation/native';
import { RotuesMain } from 'config/routes';

const FINISH_BUTTON_LABEL = 'Go to app!';

const FinishButton: React.FC = () => {
  const navigation = useNavigation();

  return (
    <PrimaryButton onPress={() => navigation.navigate(RotuesMain.HOME)}>
      {FINISH_BUTTON_LABEL}
    </PrimaryButton>
  );
};

export default FinishButton;
