import styled from 'styled-components';
import { StyleSheet } from 'react-native';
import { theme } from 'config/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { rs } from 'utils/dimensions';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding-vertical: ${rs(8)}px;
`;

export const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    backgroundColor: theme.colors.white,
  },
});
