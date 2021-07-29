import React, { useMemo, useState } from 'react';
import { FlatList } from 'react-native';
import { Header, Input } from 'components';
import { messagesData } from 'utils/messages-data';
import { SafeAreaView } from 'screens/styles';
import { ContactsContainer, NewMessageContainer, SearchInputContainer } from './styles';
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
    <SafeAreaView>
      <NewMessageContainer>
        <Header title="New Message" />
        <ContactsContainer>
          <SearchInputContainer>
            <Input
              placeholder="To:"
              useShadow={false}
              value={query}
              onChangeText={(newValue) => setQuery(newValue)}
            />
          </SearchInputContainer>
          <FlatList
            data={filteredContacts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ItemList item={item} />}
          />
        </ContactsContainer>
      </NewMessageContainer>
    </SafeAreaView>
  );
};

export default NewMessageScreen;
