import styled from 'styled-components/native';
import { rs, nlz } from 'utils/dimensions';

export const CalendarContainer = styled.View`
  border: 1px solid red;
  height: ${rs(400)}px;
  width: 100%;
`;

export const Header = styled.View`
  align-items: center;
  border-bottom-color: ${({ theme: { colors } }) => colors.grayCalendarBorder};
  border-bottom-width: ${rs(0.5)}px;
  flex-direction: row;
  font-size: ${nlz(24)}px;
  height: ${rs(44)}px;
  justify-content: center;
  left: ${rs(-125)}px;
  position: absolute;
  top: ${rs(-24)}px;
  width: ${rs(250)}px;
`;
