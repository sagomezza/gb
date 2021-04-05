import { theme } from 'config/theme';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

export const _Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  background-color: ${theme.colors.white};
`;
