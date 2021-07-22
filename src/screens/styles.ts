import { SafeAreaView as BaseSafeAreaView } from 'react-native';
import styled from 'styled-components';

export const SafeAreaView = styled(BaseSafeAreaView)`
  background-color: ${({ theme: { colors } }) => colors.white};
  flex: 1;
`;
