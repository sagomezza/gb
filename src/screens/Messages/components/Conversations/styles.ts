import styled from 'styled-components/native';
import { H, nlz, rs } from 'utils/dimensions';

export const ConversationsTitle = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(12)}px;
  font-weight: ${({ theme: { fonts } }) => fonts.regular.fontWeight};
  letter-spacing: 1.5px;
  margin-bottom: ${rs(10)}px;
  text-transform: uppercase;
`;

export const ContainerList = styled.View`
  height: ${H - 230}px;
  padding-bottom: ${rs(40)}px;
`;
