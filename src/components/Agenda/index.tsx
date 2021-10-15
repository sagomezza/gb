/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Agenda, AgendaProps } from 'react-native-calendars';
import { navigator } from 'navigation';
import routes from 'config/routes';

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

interface ItemType {
  [key: string]: any[];
}

const AgendaComponent: React.FC<AgendaProps<ItemType>> = ({
  items,
  selected,
}: AgendaProps<ItemType>): React.ReactElement => {
  const [, setCurrentDate] = useState<Date>();
  const { goToPage } = navigator();

  const renderItem = (day, item) => (
    <ItemContainer item={item && item.name}>
      <PressableItem
        onPress={() => {
          goToPage(routes.ADD_ACTIVITY, { activityDate: new Date(), item });
        }}
      >
        <AgendaHour bold>{item.hour}</AgendaHour>
        {item && item.name ? (
          <AgendaItemContainer>
            <AgendaItemTitle bold>{item?.name}</AgendaItemTitle>
            <AgendaItem>{item?.description}</AgendaItem>
            <AgendaItem>Duration:{item?.duration}</AgendaItem>
          </AgendaItemContainer>
        ) : (
          <></>
        )}
      </PressableItem>
    </ItemContainer>
  );

  const emptyText = `You don't have any event for this date`;

  const renderEmptyData = () => (
    <AgendaEmptyContainer>
      <EmptyText>{emptyText}</EmptyText>
    </AgendaEmptyContainer>
  );

  const onDayPress = (day) => setCurrentDate(day);
  return (
    <AgendaContainer>
      <Agenda
        hideKnob
        items={items}
        markingType="custom"
        renderDay={renderItem}
        renderEmptyData={renderEmptyData}
        selected={selected?.dateString}
        style={{ backgroundColor: 'white' }}
        theme={{ ...themeAgenda, dayTextColor: 'green' }}
        onDayChange={onDayPress}
        onDayPress={onDayPress}
      />
    </AgendaContainer>
  );
};

export default AgendaComponent;
