import { Text } from 'react-native';
import styled from 'styled-components/native';

export const CustomText = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.regular.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.regular.fontWeight};
`;
