import styled from 'styled-components/native';
import { rs } from 'utils/dimensions';

import { Typography } from 'components';

export const VerificationContainer = styled.View`
  align-items: center;
  background-color: white;
  flex: 1;
  height: 100%;
  justify-content: flex-start;
  padding-left: ${rs(32)}px;
  padding-right: ${rs(32)}px;
  width: 100%;
`;

export const LinkContainer = styled.TouchableOpacity`
  align-self: flex-start;
  width: 100%;
`;

export const BoldText = styled(Typography)`
  align-self: flex-start;
  font-family: ${({ theme }) => theme.fonts.regular.fontFamily};
  font-weight: bold;
  width: 100%;
`;

export const SendCode = styled(Typography)`
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.regular.fontFamily};
  font-size: ${rs(18)}px;
  width: 100%;
`;
