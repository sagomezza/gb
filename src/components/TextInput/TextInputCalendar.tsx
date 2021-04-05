import * as React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';
import { Calendar } from 'react-native-calendars';
import { TextInputNumber } from './TextInputNumber';
import { theme } from 'config/theme';

// TODO
// LocaleConfig.locales['en'] = {
//   dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
// };

const calendarTheme = {
  backgroundColor: theme.colors.white,
  calendarBackground: theme.colors.white,
  textSectionTitleColor: '#b6c1cd',
  textSectionTitleDisabledColor: '#d9e1e8',
  selectedDayBackgroundColor: 'red',
  selectedDayTextColor: 'black',
  todayTextColor: theme.colors.primary,
  dayTextColor: '#6D6D6D',
  textDisabledColor: '#d9e1e8',
  dotColor: '#00adf5',
  selectedDotColor: 'red',
  arrowColor: '#878787',
  disabledArrowColor: '#d9e1e8',
  monthTextColor: theme.colors.primary,
  indicatorColor: theme.colors.text,
  textDayFontFamily: theme.fonts.regular.fontFamily,
  textMonthFontFamily: theme.fonts.regular.fontFamily,
  textDayHeaderFontFamily: theme.fonts.regular.fontFamily,
  textDayFontWeight: '700',
  textMonthFontWeight: 'bold',
  textDayHeaderFontWeight: '300',
  textDayFontSize: 18,
  textMonthFontSize: 16,
  textDayHeaderFontSize: 16,
};

const IconContainer = styled.View`
  position: absolute;
  top: 20px;
  right: 8px;
  z-index: 10;
`;

const CalendarContainer = styled.View`
  position: absolute;
  top: 80px;
  right: 0;
  z-index: 10;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.15);
  background-color: white;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
`;

const Container = styled.View`
  position: relative;
  z-index: 2;
`;

export const TextInputCalendar = (props) => {
  const [selected, setSelectedDate] = React.useState({ dateString: '' });
  const [isShow, setIsShow] = React.useState(false);

  const onSelect = (date) => {
    props.onChange(date);
    setSelectedDate(date);
    onToggleCalendar();
  };

  const onToggleCalendar = () => {
    setIsShow(!isShow);
  };

  return (
    <Container>
      <IconContainer>
        <Icon name="calendar" size={30} color="#878787" onPress={onToggleCalendar} />
      </IconContainer>
      {isShow ? (
        <CalendarContainer>
          <Calendar firstDay={7} onDayPress={(day) => onSelect(day)} />
        </CalendarContainer>
      ) : null}
      <TextInputNumber
        editable={false}
        onFocus={onToggleCalendar}
        value={selected.dateString}
        placeholder="mm/dd/yyyy"
      ></TextInputNumber>
    </Container>
  );
};
