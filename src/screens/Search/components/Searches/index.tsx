import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList, TouchableOpacity } from 'react-native';
import { getRecentSearches } from 'store/search/searchSelector';
import { SearchesContainer, TitleSearches, RecentSearches, Separator } from './styles';

const Searches: React.FC = () => {
  const recentSearches = useSelector(getRecentSearches);

  return (
    <SearchesContainer>
      <TitleSearches>Recent Searches</TitleSearches>
      <FlatList
        data={recentSearches}
        ItemSeparatorComponent={() => <Separator />}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {}}>
            <RecentSearches>{item}</RecentSearches>
          </TouchableOpacity>
        )}
      />
    </SearchesContainer>
  );
};

export default Searches;
