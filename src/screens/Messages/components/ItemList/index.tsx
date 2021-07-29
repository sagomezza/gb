import React from 'react';
import { TouchableOpacity } from 'react-native';
import { IItemMessage } from 'store/types';
import { colors } from '../../utils/colors';
import {
  ContactName,
  ContactPhoto,
  DetailsContainer,
  LastMessage,
  MessageContainer,
  PhotoBackground,
  PhotoTitle,
} from './styles';

type ItemListProps = {
  item: IItemMessage;
  onPress?: () => void;
};

const ItemList: React.FC<ItemListProps> = ({ item, onPress }: ItemListProps) => {
  const message = item.messages[item.messages.length - 1];
  const username = `${item?.user.firstName} ${item?.user?.lastName}`;
  const usernameInitials = `${item?.user?.firstName[0]} ${item?.user?.lastName[0]}`;

  return (
    <TouchableOpacity onPress={onPress}>
      <MessageContainer>
        {item.avatar !== '' ? (
          <ContactPhoto source={{ uri: item.avatar }} />
        ) : (
          <PhotoBackground background={colors[Math.floor(Math.random() * colors.length)]}>
            <PhotoTitle>{usernameInitials}</PhotoTitle>
          </PhotoBackground>
        )}

        <DetailsContainer>
          <ContactName>{username}</ContactName>
          <LastMessage numberOfLines={1}>{message.text}</LastMessage>
        </DetailsContainer>
      </MessageContainer>
    </TouchableOpacity>
  );
};

export default ItemList;
