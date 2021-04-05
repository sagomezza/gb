// REACT
import { StyleSheet } from 'react-native';

// CONFIG
import { theme } from 'config/theme';

// UTILS
import { nlz, rs } from '../../utils/dimensions';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    borderColor: theme.colors.lighterGrey,
    borderRadius: rs(5),
    borderWidth: 1,
    fontSize: nlz(13),
    height: rs(50),
    paddingHorizontal: rs(7),
  },
  label: {
    alignSelf: 'flex-start',
  },
});
