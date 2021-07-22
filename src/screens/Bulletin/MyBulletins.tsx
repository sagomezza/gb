import React from 'react';
import PostCard from 'components/PostCard';
import { Separator, SizedFlatList } from './styles';

import { HomeScreenMockData } from './mock-data';

const MyBulletins: React.FC = () => {
  const data = HomeScreenMockData;

  return (
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
  );
};

export default MyBulletins;
