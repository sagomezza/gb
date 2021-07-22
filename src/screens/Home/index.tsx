import React from 'react';
import { Header } from 'components';
import { SafeAreaView } from 'screens/styles';
import routes from 'config/routes';
import PostCard from 'components/PostCard';
import { BackgroundGradient, Separator, SizedFlatList } from './styles';

import { HomeScreenMockData } from './mock-data';

const Home: React.FC = () => {
  const data = HomeScreenMockData;

  return (
    <SafeAreaView>
      <Header route={routes.HOME} />
      <BackgroundGradient>
        <SizedFlatList
          data={data}
          ItemSeparatorComponent={() => <Separator />}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item: { description, id, picture, postedBy, title } }) => (
            <PostCard
              description={description}
              id={id}
              picture={picture}
              postedBy={postedBy}
              title={title}
              onPress={() => {}}
            />
          )}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </BackgroundGradient>
    </SafeAreaView>
  );
};

export default Home;
