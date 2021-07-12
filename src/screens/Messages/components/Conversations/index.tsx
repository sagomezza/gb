import React, { useMemo } from 'react';
import { FlatList, View } from 'react-native';
import { messagesData } from '../../utils/example-data';
import { ContainerList, ConversationsTitle, Separator } from './styles';
import ItemList from '../ItemList';

interface IConversationsProps {
  query: string;
}

const dataSource = messagesData;

const Conversations: React.FC<IConversationsProps> = ({ query }: IConversationsProps) => {
  const filteredConversations = useMemo(
    () =>
      dataSource.filter((conversation) =>
        conversation.user.toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );

  return (
    <View>
      <ConversationsTitle>RECENT CONVERSATIONS</ConversationsTitle>
      <ContainerList>
        <FlatList
          data={filteredConversations}
          ItemSeparatorComponent={() => <Separator />}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ItemList item={item} photoPosition="left" />}
          showsHorizontalScrollIndicator={false}
        />
      </ContainerList>
    </View>
  );
};

export default Conversations;
