import React, { useMemo, useState } from 'react';
import { StatusBar, FlatList } from 'react-native';
import Spacing from 'components/Spacing';
import ScreensHeader from 'components/ScreensHeader';
import Header from 'components/Header';
import { messagesData } from 'utils/messages-data';
import { ContactsContainer, HeaderContainer, InputSearch, NewMessageContainer } from './styles';
import ItemList from './components/ItemList';

const dataSource = messagesData;

const NewMessageScreen: React.FC = () => {
  const [query, setQuery] = useState('');

  const filteredContacts = useMemo(
    () =>
      dataSource.filter((contact) =>
        `${contact.user.firstName} ${contact.user.lastName}`
          .toLowerCase()
          .includes(query.toLowerCase()),
      ),
    [query],
  );

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <HeaderContainer>
        <ScreensHeader />
      </HeaderContainer>
      <NewMessageContainer>
        <Header title="New Message" />
        <InputSearch
          placeholder="To: "
          searchButton={false}
          onChange={(value: string) => setQuery(value)}
        />
        <ContactsContainer>
          <Spacing />
          <FlatList
            data={filteredContacts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ItemList item={item} />}
          />
        </ContactsContainer>
      </NewMessageContainer>
    </>
  );
};

export default NewMessageScreen;
