import styled from 'styled-components/native';
import CalendarComponent from 'components/Calendar';
import { rs, nlz } from 'utils/dimensions';
import { IS_SMALL_DEVICE } from 'utils/responsive';
import { BaseGradient } from 'components';

export const ScreenContainer = styled.View`
  align-items: flex-start;
  background-color: ${({ theme: { colors } }) => colors.white};
  height: 100%;
  justify-content: flex-start;
  margin: 0;
  width: 100%;
`;
export const CalendarContainer = styled.View`
  height: ${IS_SMALL_DEVICE ? 48 : 55}%;
  margin-top: ${rs(8)}px;
  width: 100%;
`;

export const Calendar = styled(CalendarComponent)`
  border: 1px solid green;
`;

export const UpcommingPlansContainer = styled(BaseGradient)`
  align-items: center;
  height: ${IS_SMALL_DEVICE ? 50 : 40}%;
  justify-content: center;
  padding-horizontal: ${rs(16)}px;
  position: relative;
  width: 100%;
`;

export const Title = styled.Text`
  align-items: center;
  color: ${({ theme: { colors } }) => colors.white};
  flex-direction: row;
  font-size: ${nlz(28)}px;
  justify-content: flex-start;
  left: ${rs(16)}px;
  position: absolute;
  top: ${rs(4)}px;
  width: 100%;
`;

export const PlanContainer = styled.View`
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: ${rs(10)}px;
  flex-direction: row;
  height: ${rs(44)}px;
  justify-content: space-around;
  margin-bottom: ${nlz(4)}px;
  padding-left: ${nlz(16)}px;
  padding-right: ${nlz(8)}px;
  text-align: center;
  width: 100%;
`;

export const Plan = styled.Text`
  align-items: center;
  flex-direction: row;
  font-size: ${nlz(16)}px;
  justify-content: center;
  width: 100%;
`;
