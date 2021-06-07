import React from "react";
import { FlatList } from "react-native";
import DefaultLayout from "layout/default";
import Spacing from "components/Spacing";
import { messagesData } from "./utils/example-data";
import { Separator } from "./styles";
import ItemList from "./components/ItemList";

const dataSource = messagesData;

const MessagesScreen: React.FC = () => {
  const renderItem = ({ item }) => (
    <ItemList item={item} photoPosition="left" />
  );

  return (
    <DefaultLayout>
      <Spacing />
      <FlatList
        data={dataSource}
        ItemSeparatorComponent={() => <Separator />}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </DefaultLayout>
  );
};

export default MessagesScreen;
