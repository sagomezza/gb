import styled from 'styled-components/native';
import { nlz, rs } from 'utils/dimensions';

export const TitleItemList = styled.Text`
  color: ${({ theme: { colors } }) => colors.greenPrimary};
  font-size: ${nlz(14)}px;
  padding: ${rs(12)}px;
`;

export const DetailItemList = styled.Text`
  color: ${({ theme: { colors } }) => colors.text};
  font-size: ${nlz(12)}px;
  padding-bottom: ${rs(5)}px;
  padding-horizontal: ${rs(10)}px;
`;
