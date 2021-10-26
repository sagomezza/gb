import React, { useState } from 'react';
import { Input, GBScreenHeader } from 'components';
// import { messagesData } from 'utils/messages-data';
import { SafeAreaView } from 'screens/styles';
import routes from 'config/routes';
import ItemList from 'screens/NewMessage/components/ItemList';
import { searchUsers } from 'service/queries';
import { User } from 'lib/api';
import { useFocusEffect } from '@react-navigation/native';
import { useQueryClient } from 'react-query';
import { MainContainer, ResultsContainer, SearchInputContainer } from './styles';

type IUserListProps = {
  users: User[];
};

// const dataSource = messagesData;

const BuddiesScreen = () => {
  const [query, setQuery] = useState('');
  const [userList, setUserList] = useState<User[]>([]);
  const queryClient = useQueryClient();
  console.log(query);
  const { data: usersData } = searchUsers<IUserListProps>(
    { filter: { name: { matchPhrase: query } } },
    {
      refetchOnWindowFocus: false,
      // @ts-ignore
      select: (data) => ({
        users: data?.searchUsers?.items ?? [],
      }),
    },
  );

  React.useEffect(() => {
    console.log('----------------------------------------usersData--------------------s');
    console.log(usersData?.users);
    setUserList(usersData?.users ?? []);
  }, [usersData]);

  useFocusEffect(
    React.useCallback(() => {
      queryClient.invalidateQueries('ListUsers');
    }, [queryClient]),
  );

  // const searchResults = useMemo(
  //   () =>
  //     dataSource.filter((contact) =>
  //       `${contact.user.firstName} ${contact.user.lastName}`
  //         .toLowerCase()
  //         .includes(query.toLowerCase()),
  //     ),
  //   [query],
  // );

  const ListHeaderComponent = () => (
    <SearchInputContainer>
      <Input
        placeholder="🔍 Search"
        useShadow={false}
        value={query}
        onChangeText={(newValue) => setQuery(newValue)}
      />
    </SearchInputContainer>
  );

  return (
    <SafeAreaView>
      <GBScreenHeader title={routes.BUDDIES} />
      <MainContainer>
        <ResultsContainer
          data={userList}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={ListHeaderComponent}
          renderItem={({ item }) => <ItemList item={item} />}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </MainContainer>
    </SafeAreaView>
  );
};

export default BuddiesScreen;
