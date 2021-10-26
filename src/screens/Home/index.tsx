import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Header } from 'components';
import { SafeAreaView } from 'screens/styles';
import routes from 'config/routes';
import PostCard from 'components/PostCard';
import { listBulletinsQuery } from 'service/queries';
import { Bulletin } from 'lib/api';
import { useFocusEffect } from '@react-navigation/native';
import { BackgroundGradient, Separator, SizedFlatList } from './styles';

type TListBulletinQuery = {
  bulletins: Bulletin[];
};

const Home: React.FC = () => {
  const [dataList, setDataList] = useState<Bulletin[]>(undefined);
  const {
    data: bulletinsData,
    isLoading,
    refetch,
  } = listBulletinsQuery<TListBulletinQuery>(undefined, {
    refetchOnWindowFocus: false,
    // @ts-ignore
    select: (data) => ({
      bulletins: data?.listBulletins?.items ?? [],
    }),
  });

  useEffect(() => {
    setDataList(bulletinsData?.bulletins);
  }, [bulletinsData]);

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch]),
  );

  return (
    <SafeAreaView>
      <Header route={routes.HOME} />
      <BackgroundGradient>
        {isLoading ? (
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
        )}
      </BackgroundGradient>
    </SafeAreaView>
  );
};

export default Home;
