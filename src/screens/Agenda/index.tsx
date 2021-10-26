/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import AgendaComponent from 'components/Agenda';
import { AgendaMockData } from 'utils/agenda-mock-data';
import { TextDate, TitleDate } from 'screens/AddActivity/styles';
import { navigator } from 'navigation';
import routes from 'config/routes';
import { GBScreenHeader } from 'components';
import { SafeAreaView } from 'screens/styles';
import { AddActivity, AddActivityContainer, MainContainer, MainTitles } from './styles';
import { IAddActivityScreenProps } from '../AddActivity';

const startOfDay = require('date-fns/startOfDay');
const format = require('date-fns/format');
const differenceInDays = require('date-fns/differenceInDays');

const AgendaScreen: React.FC<IAddActivityScreenProps> = ({ route }: IAddActivityScreenProps) => {
  const { day } = route.params;
  const calendarDay = new Date();
  const date = startOfDay(calendarDay);
  const today = startOfDay(Date.now());
  const interval = differenceInDays(date, today);
  const { goToPage } = navigator();

  const titleDate = () => {
    if (interval === 0) {
      return <TitleDate>Today</TitleDate>;
    }
    if (interval === 1) {
      return <TitleDate>Tomorrow</TitleDate>;
    }
    return <TitleDate>In {interval} days</TitleDate>;
  };

  return (
    <SafeAreaView>
      <GBScreenHeader title="Agenda" />
      <MainContainer>
        <MainTitles>
          <TitleDate>{titleDate()}</TitleDate>
          <TextDate>{format(calendarDay, 'eeee dd MMMM, yyyy')}</TextDate>
          <AddActivityContainer
            onPress={() => goToPage(routes.ADD_ACTIVITY, { activityDate: new Date() })}
          >
            <AddActivity bold>Add +</AddActivity>
          </AddActivityContainer>
        </MainTitles>
        <AgendaComponent items={AgendaMockData} selected={calendarDay} />
      </MainContainer>
    </SafeAreaView>
  );
};

export default AgendaScreen;
