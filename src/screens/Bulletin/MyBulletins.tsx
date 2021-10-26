import React, { useCallback, useEffect, useState } from 'react';
import PostCard from 'components/PostCard';
import { Bulletin } from 'lib/api';
import { listBulletinsQuery } from 'service/queries';
import { useFocusEffect } from '@react-navigation/native';
import { getUserId } from 'store/auth/authSelectors';
import { useSelector } from 'react-redux';
import { ActivityIndicator } from 'components';
import { useQueryClient } from 'react-query';
import { Separator, SizedFlatList } from './styles';

type TListBulletinQuery = {
  bulletins: Bulletin[];
};

const MyBulletins: React.FC = () => {
  const queryClient = useQueryClient();
  const userID = useSelector(getUserId);
  const [dataList, setDataList] = useState<Bulletin[]>(undefined);
  const { data: bulletinsData, isLoading } = listBulletinsQuery<TListBulletinQuery>(
    { filter: { bulletinOwnerId: { eq: userID } } },
    {
      refetchOnWindowFocus: false,
      // @ts-ignore
      select: (data) => ({
        bulletins: data?.listBulletins?.items ?? [],
      }),
    },
  );

  useEffect(() => {
    setDataList(bulletinsData?.bulletins);
  }, [bulletinsData]);

  useFocusEffect(
    useCallback(() => {
      queryClient.invalidateQueries('ListBulletins');
    }, [queryClient]),
  );

  return isLoading ? (
    <ActivityIndicator color="white" />
  ) : (
    <SizedFlatList
      data={dataList}
      ItemSeparatorComponent={() => <Separator />}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item: { description, id, owner, photos, title } }) => (
        <PostCard
          description={description}
          id={id}
          picture={photos[0]}
          postedBy={owner.name}
          title={title}
          onPress={() => {}}
        />
      )}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default MyBulletins;
