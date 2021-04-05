import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { theme } from 'config/theme';
import Typography from '../Typography';

interface Props {
  text: string;
  spinnerColor: string;
  testID?: string;
}

const EmptyContent = ({ text, spinnerColor, testID }: Props) => {
  return (
    <View testID={testID}>
      {text ? <Typography>{text}</Typography> : <ActivityIndicator color={spinnerColor} />}
    </View>
  );
};

EmptyContent.defaultProps = {
  text: 'Empty content',
  spinnerColor: theme.colors.primary,
};

export default EmptyContent;
