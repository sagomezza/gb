/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Agenda, AgendaProps } from 'react-native-calendars';
import { navigator } from 'navigation';
import routes from 'config/routes';
import { groupBy } from 'utils/groupBy';
import {
  AgendaContainer,
  AgendaHour,
  themeAgenda,
  ItemContainer,
  PressableItem,
  AgendaItemContainer,
  AgendaItem,
  AgendaItemTitle,
  AgendaEmptyContainer,
  EmptyText,
} from './styles';

const format = require('date-fns/format');

const AgendaComponent: React.FC<AgendaProps> = ({
  items,
  onDayChange,
  selected,
}: AgendaProps): React.ReactElement => {
  const [currentDate, setCurrentDate] = useState<Date>();
  const { goToPage } = navigator();
  const agendaItems = groupBy(items, 'activityDate');
  const duration = (date1, date2) => {
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60));
    return diffDays;
  };
  // @ts-ignore
  const selectedFormated = format(new Date(selected), 'yyyy-MM-dd');
  const renderItem = (day, item) => {
    if (item?.activityDate !== selectedFormated && item?.activityDate !== currentDate?.dateString)
      return null;
    return (
      <ItemContainer item={item && item.title}>
        <PressableItem
          onPress={() => {
            goToPage(routes.ADD_ACTIVITY, { activityDate: new Date(), item });
          }}
        >
          <AgendaHour bold>{`${new Date(item.startAt).getHours()} ${
            new Date(item.startAt).getHours() < 12 ? 'AM' : 'PM'
          }`}</AgendaHour>
          {item && item.title ? (
            <AgendaItemContainer>
              <AgendaItemTitle bold>{item?.title}</AgendaItemTitle>
              <AgendaItem>{item?.description}</AgendaItem>
              <AgendaItem>
                Duration: {duration(new Date(item.startAt), new Date(item.endsAt))}h
              </AgendaItem>
            </AgendaItemContainer>
          ) : (
            <></>
          )}
        </PressableItem>
      </ItemContainer>
    );
  };

  const emptyText = `You don't have any event for this date`;

  const renderEmptyData = () => (
    <AgendaEmptyContainer>
      <EmptyText>{emptyText}</EmptyText>
    </AgendaEmptyContainer>
  );

  const onDayPress = (day) => {
    setCurrentDate(day);
    const dateSplit = day?.dateString?.split('-');
    const calendarDate = new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]);
    onDayChange(calendarDate);
  };

  return (
    <AgendaContainer>
      <Agenda
        hideKnob
        futureScrollRange={0}
        items={agendaItems}
        markingType="custom"
        minDate={format(new Date(), 'yyyy-MM-dd')}
        renderDay={renderItem}
        renderEmptyData={renderEmptyData}
        selected={selectedFormated || currentDate?.dateString}
        style={{ backgroundColor: 'white' }}
        theme={{ ...themeAgenda, dayTextColor: 'green' }}
        onDayChange={onDayPress}
        onDayPress={onDayPress}
      />
    </AgendaContainer>
  );
};

export default AgendaComponent;
