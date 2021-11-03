/* eslint-disable no-console */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Header } from 'components';
import { SafeAreaView } from 'screens/styles';
import routes from 'config/routes';
import PostCard from 'components/PostCard';
import { getUserQuery, listBulletinsQuery } from 'service/queries';
import { Bulletin, GetUserQuery } from 'lib/api';
import { useFocusEffect } from '@react-navigation/native';
import { getUserId } from 'store/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import AdMob, { BannerAd, BannerAdSize } from '@react-native-admob/admob';
import { useQueryClient } from 'react-query';
/* import { Platform } from 'react-native';
import { AD_UNIT_ID_IOS, AD_UNIT_ID_ANDROID } from '@env'; */
import { toggleEditProfile } from 'store/app/appActions';
import { BackgroundGradient, Separator, SizedFlatList } from './styles';

type TListBulletinQuery = {
  bulletins: Bulletin[];
};

const Home: React.FC = () => {
  const bannerRef = useRef(null);
  const queryClient = useQueryClient();
  const userID = useSelector(getUserId);
  const [dataList, setDataList] = useState<Bulletin[]>(undefined);
  const dispatch = useDispatch();

  getUserQuery(
    { id: userID },
    {
      refetchOnWindowFocus: false,
      onSuccess: () => {},
    },
  );
  /* const unitID = Platform.select({
    ios: AD_UNIT_ID_IOS,
    android: AD_UNIT_ID_ANDROID,
  }); */

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

  const userData = queryClient.getQueryData<GetUserQuery>([
    'GetUser',
    {
      id: userID,
    },
  ]);

  const profile = userData?.getUser;

  useEffect(() => {
    setDataList(bulletinsData?.bulletins);
  }, [bulletinsData]);

  useFocusEffect(
    useCallback(() => {
      refetch();
      bannerRef.current?.loadAd();
      dispatch(toggleEditProfile(false));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refetch]),
  );

  useEffect(() => {
    const init = async () => {
      await AdMob.initialize();
    };

    init();
  }, []);

  return (
    <SafeAreaView>
      <Header route={routes.HOME} />
      <BackgroundGradient>
        {!profile?.premium && (
          <BannerAd
            ref={bannerRef}
            size={BannerAdSize.ADAPTIVE_BANNER}
            // TEST UNIT_ID
            unitId="ca-app-pub-3940256099942544/6300978111"
            onAdFailedToLoad={(error) => console.error(error)}
          />
        )}

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
