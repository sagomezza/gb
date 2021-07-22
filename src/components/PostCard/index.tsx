import React from 'react';
import { Card } from 'components';
import { ImageSourcePropType, TouchableOpacity } from 'react-native';
import { DataContainer, Description, PostedBy, Picture, Title } from './styles';

export interface IPostCardProps {
  description: string;
  id: number | string;
  onPress: (id: number | string) => void;
  picture: ImageSourcePropType;
  postedBy: string;
  title: string;
}

const PostCard: React.FC<IPostCardProps> = ({
  description,
  id,
  onPress,
  picture,
  postedBy,
  title,
}: IPostCardProps) => (
  <TouchableOpacity onPress={() => onPress(id)}>
    <Card>
      <Picture source={picture} />
      <DataContainer>
        <Title>{title}</Title>
        <PostedBy>{`Posted by ${postedBy}`}</PostedBy>
        <Description>{description}</Description>
      </DataContainer>
    </Card>
  </TouchableOpacity>
);

export default PostCard;
