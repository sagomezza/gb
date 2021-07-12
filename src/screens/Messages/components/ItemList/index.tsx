/* eslint-disable no-nested-ternary */
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { colors } from '../../utils/colors';
import {
  ContactName,
  ContactPhoto,
  DetailsContainer,
  LastMessage,
  MessageContainer,
  MessageTitleContainer,
  PhotoBackground,
  PhotoTitle,
} from './styles';

type ItemListProps = {
  item: {
    avatar: string;
    id: number;
    messages: {
      createdAt: Date;
      id: number;
      text: string;
    }[];
    user: string;
  };
  onPress?: () => void;
  photoPosition: 'rigth' | 'left';
};

const ItemList: React.FC<ItemListProps> = ({
  item,
  onPress,
  photoPosition = 'left',
}: ItemListProps) => {
  const splitName = item.user.split(' ');
  const userName = splitName[0].charAt(0) + splitName[1].charAt(0);
  const message = item.messages[item.messages.length - 1];

  return (
    <TouchableOpacity onPress={onPress}>
      <MessageContainer>
        {photoPosition === 'left' ? (
          item.avatar !== '' ? (
            <ContactPhoto source={{ uri: item.avatar }} />
          ) : (
            <PhotoBackground background={colors[Math.floor(Math.random() * colors.length)]}>
              <PhotoTitle>{userName}</PhotoTitle>
            </PhotoBackground>
          )
        ) : (
          <View />
        )}

        <DetailsContainer>
          <MessageTitleContainer>
            <View>
              <ContactName>{item.user}</ContactName>
            </View>
          </MessageTitleContainer>
          <LastMessage numberOfLines={1}>{message.text}</LastMessage>
        </DetailsContainer>
        {photoPosition === 'rigth' ? (
          item.avatar !== '' ? (
            <ContactPhoto source={{ uri: item.avatar }} />
          ) : (
            <PhotoBackground>
              <PhotoTitle>{userName}</PhotoTitle>
            </PhotoBackground>
          )
        ) : (
          <View />
        )}
      </MessageContainer>
    </TouchableOpacity>
  );
};

export default ItemList;
