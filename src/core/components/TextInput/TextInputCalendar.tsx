/* eslint-disable react/prop-types */
import * as React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Calendar } from 'react-native-calendars';
import { TextInputNumber } from './TextInputNumber';
import { IconContainer, CalendarContainer, Container } from './styles';
import { theme } from '../../../config/theme';

// TODO
// LocaleConfig.locales['en'] = {
//   dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
// };

export const TextInputCalendar = (props) => {
  const { onChange } = props;

  const [selected, setSelectedDate] = React.useState({ dateString: '' });
  const [isShow, setIsShow] = React.useState(false);

  const onSelect = (date) => {
    if (onChange) {
      onChange(date);
    }
    setSelectedDate(date);
    onToggleCalendar();
  };

  const onToggleCalendar = () => {
    setIsShow(!isShow);
  };

  return (
    <Container>
      <IconContainer>
        <Icon color={theme.colors.lightGray} name="calendar" size={30} onPress={onToggleCalendar} />
      </IconContainer>
      {isShow ? (
        <CalendarContainer>
          <Calendar firstDay={7} onDayPress={(day) => onSelect(day)} />
        </CalendarContainer>
      ) : null}
      <TextInputNumber
        editable={false}
        placeholder="mm/dd/yyyy"
        value={selected.dateString}
        onFocus={onToggleCalendar}
      />
    </Container>
  );
};
