import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { theme } from 'config/theme';
import { IItemMessage } from 'store/types';
import { colors } from 'screens/NewMessage/utils/colors';
import {
  ContactName,
  ContactPhoto,
  DetailsContainer,
  IconContainer,
  ContactDetail,
  MessageContainer,
  MessageTitleContainer,
  PhotoBackground,
  PhotoTitle,
  FirstLineDetailContainer,
} from './styles';

type ItemListProps = {
  item: IItemMessage;
  onPress?: () => void;
};

const ItemList: React.FC<ItemListProps> = ({ item, onPress }: ItemListProps) => {
  const userName = `${item?.user?.firstName.charAt(0)} ${item?.user?.lastName.charAt(0)}`;

  return (
    <TouchableOpacity onPress={onPress}>
      <MessageContainer>
        {item.avatar !== '' ? (
          <ContactPhoto source={{ uri: item.avatar }} />
        ) : (
          <PhotoBackground background={colors[Math.floor(Math.random() * colors.length)]}>
            <PhotoTitle>{userName}</PhotoTitle>
          </PhotoBackground>
        )}
        <DetailsContainer>
          <MessageTitleContainer>
            <ContactName>
              {item.user.firstName} {item.user.lastName}
            </ContactName>
          </MessageTitleContainer>
          <View>
            <FirstLineDetailContainer>
              <ContactDetail numberOfLines={1}>
                {item.age}, {item.gender}.
              </ContactDetail>
              <Icon color={theme.colors.darkGreenModal} name="map-pin" size={20} />
              <ContactDetail numberOfLines={1}> {item.location}.</ContactDetail>
            </FirstLineDetailContainer>
            <ContactDetail numberOfLines={1}>Interest: {item.interests?.toString()}</ContactDetail>
          </View>
        </DetailsContainer>
        <IconContainer>
          <Icon color={theme.colors.darkGreenModal} name="send" size={30} />
        </IconContainer>
      </MessageContainer>
    </TouchableOpacity>
  );
};

export default ItemList;
