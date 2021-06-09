/* eslint-disable no-alert */
import React, { useMemo, useState } from "react";
import { FlatList, View } from "react-native";
import DefaultLayout, { Body } from "layout/default";
import { Spacing } from "core/components";
import { useDispatch, useSelector } from "react-redux";
import { saveRecentSearches } from "store/search/searchActions";
import { RootState } from "@store";
import { data } from "./example-data";
import { InputSearch, Separator } from "./styles";
import ItemView from "./components/ItemView";
import Searches from "./components/Searches";

const dataSource = data;

const SearchScreen = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const recentSearches = useSelector(
    (state: RootState) => state.search.recentSearches
  );

  const filteredContracts = useMemo(
    () =>
      dataSource.filter(
        (contact) =>
          contact.label.toLowerCase().includes(query.toLowerCase()) ||
          contact.owner.toLowerCase().includes(query.toLowerCase()) ||
          contact.email.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  const getItem = (item) => {
    dispatch(saveRecentSearches({ text: item.label }));
    alert(`Id : ${item.id}\nGym : ${item.label}\nOwner: ${item.owner}`);
  };

  const bodySearch = () => {
    if (query !== "") {
      return (
        <FlatList
          data={filteredContracts}
          ItemSeparatorComponent={() => <Separator />}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ItemView item={item} onPress={() => getItem(item)} />
          )}
        />
      );
    }
    if (recentSearches.length > 0) {
      return <Searches />;
    }
    return <View />;
  };

  return (
    <DefaultLayout>
      <Body>
        <Spacing size={30} />
        <InputSearch
          clearButton
          placeholder="Find gyms, people and more"
          onChange={(value: string) => setQuery(value)}
        />
        <Spacing size={10} />
        {bodySearch()}
      </Body>
    </DefaultLayout>
  );
};

export default SearchScreen;
