/* eslint-disable no-alert */
import React, { useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Body } from 'layout/default';
import Spacing from 'components/Spacing';
import { useDispatch, useSelector } from 'react-redux';
import { saveRecentSearches } from 'store/search/searchActions';
import { getRecentSearches } from 'store/search/searchSelector';
import routes from 'config/routes';
import { GBScreenHeader } from 'components';
import { data } from './example-data';
import { InputSearch, SearchContainer, Separator } from './styles';
import ItemView from './components/ItemView';
import Searches from './components/Searches';

const dataSource = data;

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const recentSearches = useSelector(getRecentSearches);

  const filteredResults = useMemo(
    () =>
      dataSource.filter(
        (result) =>
          result.label.toLowerCase().includes(query.toLowerCase()) ||
          result.owner.toLowerCase().includes(query.toLowerCase()) ||
          result.email.toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );

  const bodySearch = useMemo(() => {
    const getItem = (item) => {
      dispatch(saveRecentSearches({ text: item.label }));
      alert(`Id : ${item.id}\nGym : ${item.label}\nOwner: ${item.owner}`);
    };

    if (query !== '') {
      return (
        <FlatList
          data={filteredResults}
          ItemSeparatorComponent={() => <Separator />}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ItemView item={item} onPress={() => getItem(item)} />}
        />
      );
    }
    if (recentSearches.length > 0) {
      return <Searches />;
    }
    return <View />;
  }, [dispatch, filteredResults, query, recentSearches.length]);

  return (
    <>
      <GBScreenHeader title={routes.PROFILE} />
      <SearchContainer>
        <Body>
          <Spacing size={20} />
          <InputSearch
            placeholder="Find gyms, people and more"
            onChange={(value: string) => setQuery(value)}
          />
          <Spacing size={10} />
          {bodySearch}
        </Body>
      </SearchContainer>
    </>
  );
};

export default SearchScreen;
