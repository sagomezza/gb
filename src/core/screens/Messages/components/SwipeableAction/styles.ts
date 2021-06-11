import styled from 'styled-components/native';
import { rs } from 'utils/dimensions';

interface IActionContainerProps {
  backgroundColor: string;
}

export const ActionContainer = styled.View<IActionContainerProps>`
  align-items: center;
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'gray')};
  flex: 1;
  justify-content: center;
  margin-top: ${rs(10)}px;
  width: ${rs(65)}px;
`;

export const ActionText = styled.Text`
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: 600;
  padding-horizontal: ${rs(8)}px;
`;
