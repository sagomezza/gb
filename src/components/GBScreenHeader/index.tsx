import { Spacing } from 'components';
import ScreensHeader from 'components/ScreensHeader';
import React from 'react';
import { StatusBar } from 'react-native';
import { BorderSeparator, Title, TitleContainer } from './styles';

interface IGBScreenHeaderProps {
  title: string;
}

const GBScreenHeader = ({ title }: IGBScreenHeaderProps) => (
  <>
    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
    <ScreensHeader isGoBack />
    <TitleContainer>
      <Title>{title}</Title>
      <BorderSeparator />
      <Spacing size={50} />
    </TitleContainer>
  </>
);

export default GBScreenHeader;
