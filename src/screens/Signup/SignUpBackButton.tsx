import React from 'react';
import DefaultIcon from 'components/DefaultIcon';
import { theme } from 'config/theme';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface SignUpBackButtonProps {
  iconColor?: keyof typeof theme.colors;
}

const SignUpBackButton = ({ iconColor = 'greenSecondary' }: SignUpBackButtonProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={navigation.goBack}>
      <DefaultIcon
        color={iconColor}
        iconFamily="Ionicons"
        name="arrow-back-circle-outline"
        size={28}
      />
    </TouchableOpacity>
  );
};

export default SignUpBackButton;
