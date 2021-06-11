import { theme } from 'config/theme';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  background-color: ${theme.colors.white};
  flex: 1;
  width: 100%;
`;
