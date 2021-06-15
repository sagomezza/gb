import styled from 'styled-components';
import { rs } from 'utils/dimensions';

export const DotsMainContainer = styled.View`
  align-items: center;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const Dot = styled.View`
  background-color: ${({ color }) => color};
  border-radius: ${({ size }) => rs(size / 2)}px;
  height: ${({ size }) => rs(size)}px;
  margin-left: ${({ size }) => rs(size / 2)}px;
  margin-right: ${({ size }) => rs(size / 2)}px;
  width: ${({ size }) => rs(size)}px;
`;
