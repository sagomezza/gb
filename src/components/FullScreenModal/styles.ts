import styled from 'styled-components';
import { View } from 'react-native';
import { rs } from 'utils/dimensions';

export const BackdropContainer = styled(View)`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin: 0px;
  width: auto;
`;

export const ContentContainer = styled(View)`
  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: ${rs(14)}px;
  padding-bottom: ${rs(36)}px;
  padding-left: ${rs(42)}px;
  padding-right: ${rs(42)}px;
  padding-top: ${rs(56)}px;
  position: relative;
`;

export const CloseIconContainer = styled(View)`
  position: absolute;
  right: ${rs(16)}px;
  top: ${rs(16)}px;
`;
