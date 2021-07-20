import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { navigator } from 'navigation';
import { theme } from 'config/theme';
import routes from 'config/routes';
import { HeaderContainer } from 'screens/NewMessage/styled';
import ScreensHeader from 'components/ScreensHeader';
import {
  ContactsContainer,
  InputSearch,
  MessagesContainer,
  MessagesTitle,
  MessagesTitleContainer,
  SearchContainer,
} from './styles';
import Conversations from './components/Conversations';

const MessagesScreen: React.FC = () => {
  const [query, setQuery] = useState('');
  const { goToPage } = navigator();

  return (
    <MessagesContainer>
      <HeaderContainer>
        <ScreensHeader />
      </HeaderContainer>
      <MessagesTitleContainer>
        <MessagesTitle>Messages</MessagesTitle>
      </MessagesTitleContainer>
      <ContactsContainer>
        <SearchContainer>
          <InputSearch onChange={(value: string) => setQuery(value)} />
          <TouchableOpacity onPress={() => goToPage(routes.NEWMESSAGE)}>
            <Icon color={theme.colors.greenPrimary} name="new-message" size={40} />
          </TouchableOpacity>
        </SearchContainer>
        <Conversations query={query} />
      </ContactsContainer>
    </MessagesContainer>
  );
};

export default MessagesScreen;
