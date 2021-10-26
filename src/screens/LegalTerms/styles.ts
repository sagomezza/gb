import styled from 'styled-components/native';
import { rs } from 'utils/dimensions';
import { Body } from 'layout/default';

export const ContainerTerms = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  flex: 1;
`;

export const BodyTerms = styled(Body)`
  margin-vertical: ${rs(10)}px;
  padding-horizontal: ${rs(25)}px;
`;

export const HeaderContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 15%;
  width: 100%;
`;
