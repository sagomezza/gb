import React, { useMemo } from 'react';
import { FlatList, View } from 'react-native';
import { messagesData } from 'utils/messages-data';
import { navigator } from 'navigation';
import routes from 'config/routes';
import { ContainerList, ConversationsTitle, Separator } from './styles';
import ItemList from '../ItemList';

interface IConversationsProps {
  query: string;
}

const dataSource = messagesData;

const Conversations: React.FC<IConversationsProps> = ({ query }: IConversationsProps) => {
  const { goToPage } = navigator();
  const filteredConversations = useMemo(
    () =>
      query.length > 0
        ? dataSource.filter((conversation) => {
            const fullName = `${conversation?.user?.firstName} ${conversation?.user?.lastName}`;
            return fullName.toLowerCase().includes(query.toLowerCase());
          })
        : dataSource,
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
          renderItem={({ item }) => (
            <ItemList
              item={item}
              photoPosition="left"
              onPress={() => goToPage(routes.CHAT, { item: JSON.stringify(item) })}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </ContainerList>
    </View>
  );
};

export default Conversations;
