/* eslint-disable no-console */
import ScreensHeader from 'components/ScreensHeader';
import React from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import Spacing from 'components/Spacing';
import { RouteProp } from '@react-navigation/native';
import {
  AddActivityContainer,
  AddActivityTitle,
  HeaderContainer,
  TextDate,
  TitleDate,
} from './styles';
import Form from './Form';
import { IFormValuesAddActivity } from './types';

const startOfDay = require('date-fns/startOfDay');
const format = require('date-fns/format');
const differenceInDays = require('date-fns/differenceInDays');

type DailyActivityParamList = {
  DailyActivity: {
    activityDate: Date;
  };
};

type AddActivityScreenRouteProp = RouteProp<DailyActivityParamList, 'DailyActivity'>;

interface IAddActivityScreenProps {
  route: AddActivityScreenRouteProp;
}

const AddActivityScreen: React.FC<IAddActivityScreenProps> = ({
  route,
}: IAddActivityScreenProps) => {
  const { activityDate } = route.params;

  const date = startOfDay(activityDate);
  const today = startOfDay(Date.now());
  const interval = differenceInDays(date, today);

  const onSubmit = (data: IFormValuesAddActivity) => {
    console.log(data);
  };

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
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <HeaderContainer>
        <ScreensHeader isGoBack />
      </HeaderContainer>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <AddActivityContainer>
          <Spacing size={20} />
          <View>
            {titleDate()}
            <TextDate>{format(activityDate, 'eeee dd MMMM, yyyy')}</TextDate>
          </View>
          <Spacing />
          <View>
            <AddActivityTitle>Add Activity</AddActivityTitle>
            <Spacing />
            <Form onSubmit={onSubmit} />
          </View>
        </AddActivityContainer>
      </ScrollView>
    </>
  );
};

export default AddActivityScreen;
