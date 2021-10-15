import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { theme } from 'config/theme';
import Typography from 'components/Typography';
import { nlz, rs } from 'utils/dimensions';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputStyles: {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.lighterGrey,
    borderWidth: 1,
    color: theme.colors.text,
    fontFamily: theme.fonts.regular.fontFamily,
    fontSize: rs(16),
    fontWeight: theme.fonts.regular.fontWeight,
    height: rs(50),
    paddingHorizontal: rs(7),
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
  isTouched: {
    fontWeight: 'bold',
  },
});

export const Label = styled(Typography)`
  font-size: ${nlz(11)}px;
`;
