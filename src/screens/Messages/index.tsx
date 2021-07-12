import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { theme } from 'config/theme';
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

  return (
    <MessagesContainer>
      <MessagesTitleContainer>
        <MessagesTitle>Messages</MessagesTitle>
      </MessagesTitleContainer>
      <ContactsContainer>
        <SearchContainer>
          <InputSearch onChange={(value: string) => setQuery(value)} />
          <TouchableOpacity>
            <Icon color={theme.colors.greenPrimary} name="new-message" size={40} />
          </TouchableOpacity>
        </SearchContainer>
        <Conversations query={query} />
      </ContactsContainer>
    </MessagesContainer>
  );
};

export default MessagesScreen;
