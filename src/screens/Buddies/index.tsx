import React, { useMemo, useState } from 'react';
import { FlatList } from 'react-native';
import { Header, Input } from 'components';
import { messagesData } from 'utils/messages-data';
import { SafeAreaView } from 'screens/styles';
import routes from 'config/routes';
import ItemList from 'screens/NewMessage/components/ItemList';
import { MainContainer, ResultsContainer, SearchInputContainer } from './styles';

const dataSource = messagesData;

const BuddiesScreen = () => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(
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
      <Header route={routes.BUDDIES} />
      <MainContainer>
        <SearchInputContainer>
          <Input
            placeholder="🔍 Search"
            useShadow={false}
            value={query}
            onChangeText={(newValue) => setQuery(newValue)}
          />
        </SearchInputContainer>
        <ResultsContainer>
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ItemList item={item} />}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        </ResultsContainer>
      </MainContainer>
    </SafeAreaView>
  );
};

export default BuddiesScreen;
