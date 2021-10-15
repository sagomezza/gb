import styled from 'styled-components/native';
import { nlz, rs } from 'utils/dimensions';

export const TitleContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  height: ${rs(50)}px;
`;

export const Title = styled.Text`
  align-self: center;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${nlz(16)}px;
  margin-bottom: ${rs(8)}px;
  text-align: center;
`;

export const BorderSeparator = styled.View`
  align-self: center;
  background-color: ${({ theme }) => theme.colors.gray1};
  height: ${rs(1)}px;
  margin-bottom: ${rs(8)}px;
  text-align: center;
  width: 100%;
`;
