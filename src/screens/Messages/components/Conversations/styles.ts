import styled from 'styled-components/native';
import { H, nlz, rs } from 'utils/dimensions';

export const Separator = styled.View`
  align-self: flex-end;
  background-color: ${({ theme: { colors } }) => colors.lightGrey};
  height: ${rs(3)}px;
  width: 84%;
`;

export const ConversationsTitle = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(12)}px;
  font-weight: ${({ theme: { fonts } }) => fonts.regular.fontWeight};
`;

export const ContainerList = styled.View`
  height: ${H - 230}px;
  padding-bottom: ${rs(40)}px;
`;
