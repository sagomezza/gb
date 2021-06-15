import { RootState } from '@store';
import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList, TouchableOpacity } from 'react-native';
import { SearchesContainer, TitleSearches, RecentSearches, Separator } from './styles';

const Searches: React.FC = () => {
  const recentSearches = useSelector((state: RootState) => state.search.recentSearches);

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
