import styled from 'styled-components/native';
import { nlz, rs } from 'utils/dimensions';
import Text from '../Text';
import { theme } from '../../config/theme';

export const styles = {
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: rs(5),
    padding: rs(10),
    marginRight: rs(10),
    marginTop: rs(17),
  },
  emptyDate: {
    height: rs(15),
    flex: 1,
    paddingTop: rs(30),
  },
};

export const themeAgenda = {
  agendaDayNumColor: theme.colors.dayNotSelected,
  agendaDayTextColor: theme.colors.greenSecondaryAgenda,
  agendaKnobColor: theme.colors.greenSecondary,
  agendaTodayColor: theme.colors.greenSecondary,
  textDayFontSize: nlz(16),
  textDayFontFamily: theme.fonts.regular.fontFamily,
  textDayHeaderFontFamily: theme.fonts.regular.fontFamily,
  textDayHeaderFontSize: nlz(14),
};

export const AgendaContainer = styled.View`
  background-color: ${({ theme: { colors } }) => colors.white};
  height: 100%;
`;

export const ItemContainer = styled.View`
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.white};
  border-style: solid;
  border-top-color: ${({ theme: { colors } }) => colors.grayAgenda};
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  height: ${({ item }) => (item ? rs(100) : rs(70))}px;
  justify-content: center;
  padding-horizontal: ${rs(8)}px;
  padding-vertical: ${rs(8)}px;
  position: relative;
  width: 100%;
`;

export const PressableItem = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.white};
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: flex-end;
  width: 100%;
`;

export const AgendaHour = styled(Text)`
  color: ${({ theme: { colors } }) => colors.gray1};
  font-family: ${({ theme: { fonts } }) => fonts.medium.fontFamily};
  font-size: ${nlz(16)}px;
  font-weight: 400;
  left: ${rs(4)}px;
  padding-horizontal: ${rs(8)}px;
  position: absolute;
  top: ${rs(4)}px;
`;

export const AgendaItemContainer = styled.View`
  background-color: ${({ theme: { colors } }) => colors.greenSecondary};
  border-radius: ${rs(16)}px;
  height: 100%;
  justify-content: center;
  margin-right: 4%;
  width: 70%;
`;

export const AgendaItemTitle = styled(Text)`
  color: ${({ theme: { colors } }) => colors.white};
  font-family: ${({ theme: { fonts } }) => fonts.medium.fontFamily};
  font-size: ${nlz(15)}px;
  font-weight: 400;
  left: ${rs(4)}px;
  padding-horizontal: ${rs(8)}px;
`;
export const AgendaItem = styled(Text)`
  color: ${({ theme: { colors } }) => colors.white};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(12)}px;
  font-weight: 400;
  left: ${rs(4)}px;
  padding-horizontal: ${rs(8)}px;
`;

export const AgendaEmptyContainer = styled.View`
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.white};
  border-top-color: ${({ theme: { colors } }) => colors.grayAgenda};
  border-top-width: 1px;
  flex: 1;
`;

export const EmptyText = styled.Text`
  color: ${({ theme: { colors } }) => colors.greenSecondary};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(20)}px;
  margin-top: 40%;
  text-align: center;
  width: 85%;
`;
