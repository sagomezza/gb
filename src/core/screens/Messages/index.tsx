import React from 'react';
import { FlatList } from 'react-native';
import DefaultLayout from 'layout/default';
import { messagesData } from './utils/example-data';
import { Separator } from './styles';
import ItemList from './components/ItemList';

const dataSource = messagesData;

const renderItem = ({ item }) => <ItemList item={item} photoPosition="left" />;
const separator = () => <Separator />;

const MessagesScreen: React.FC = () => (
  <DefaultLayout>
    <FlatList
      data={dataSource}
      ItemSeparatorComponent={separator}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  </DefaultLayout>
);

export default MessagesScreen;
