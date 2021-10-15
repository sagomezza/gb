import styled from 'styled-components/native';
import { nlz, rs } from 'utils/dimensions';
import Text from 'components/Text';

export const MainContainer = styled.View`
  background-color: ${({ theme: { colors } }) => colors.white};
  flex: 1;
`;

export const MainTitles = styled.View`
  height: ${rs(100)}px;
  padding-horizontal: ${rs(16)}px;
  padding-top: ${rs(16)}px;
  position: relative;
  width: 100%;
`;

export const AddActivityContainer = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.greenSecondary};
  border-radius: ${rs(16)}px;
  height: ${rs(30)}px;
  position: absolute;
  right: ${rs(8)}px;
  top: ${rs(20)}px;
  width: ${rs(90)}px;
`;

export const AddActivity = styled(Text)`
  color: ${({ theme: { colors } }) => colors.white};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(16)}px;
  font-weight: 400;
  padding-horizontal: ${rs(8)}px;
`;
