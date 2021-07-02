import { theme } from 'config/theme';
import { StyleSheet } from 'react-native';

export const bottomNavigatorStyles = StyleSheet.create({
  shadow: {
    shadowColor: theme.colors.gray0,
    shadowOffset: {
      height: -5,
      width: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    elevation: 5,
  },
  base: {
    height: 100,
  },
});
