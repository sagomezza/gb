import React from 'react';
import AgendaComponent from 'components/Agenda';
import { TextDate, TitleDate } from 'screens/AddActivity/styles';
import { navigator } from 'navigation';
import routes from 'config/routes';
import { GBScreenHeader } from 'components';
import { SafeAreaView } from 'screens/styles';
import { IAddActivityScreenProps } from '../AddActivity';
import { AddActivity, AddActivityContainer, MainContainer, MainTitles } from './styles';

const startOfDay = require('date-fns/startOfDay');
const format = require('date-fns/format');
const differenceInDays = require('date-fns/differenceInDays');

const AgendaScreen: React.FC<IAddActivityScreenProps> = ({ route }: IAddActivityScreenProps) => {
  const { activities, day } = route.params;
  const [calendarDay, setCalendarDay] = React.useState<Date>(new Date());
  const date = startOfDay(calendarDay);
  const today = startOfDay(Date.now());
  const interval = differenceInDays(date, today);
  const { goToPage } = navigator();

  React.useEffect(() => {
    const dateSplit = day?.dateString?.split('-') ?? day?.split('-');
    const calendarDate = dateSplit
      ? new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2])
      : new Date(day) || new Date();
    setCalendarDay(calendarDate);
  }, [day]);

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
    <>
      <SafeAreaView>
        <MainContainer>
          <GBScreenHeader title="Agenda" />
          <MainTitles>
            <TitleDate>{titleDate()}</TitleDate>
            <TextDate>{format(calendarDay, 'eeee dd MMMM, yyyy')}</TextDate>
            <AddActivityContainer
              onPress={() => goToPage(routes.ADD_ACTIVITY, { activityDate: calendarDay })}
            >
              <AddActivity bold>Add +</AddActivity>
            </AddActivityContainer>
          </MainTitles>
          <AgendaComponent
            items={activities}
            selected={calendarDay}
            onDayChange={(day) => setCalendarDay(day)}
          />
        </MainContainer>
      </SafeAreaView>
    </>
  );
};

export default AgendaScreen;
