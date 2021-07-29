import React from 'react';
import { TouchableOpacity } from 'react-native';
import { IItemMessage } from 'store/types';
import { colors } from 'screens/NewMessage/utils/colors';
import { DefaultIcon } from 'components';
import { useNavigation } from '@react-navigation/native';
import routes from 'config/routes';
import {
  ContactDetail,
  ContactName,
  ContactPhoto,
  DetailsContainer,
  FirstLineDetailContainer,
  IconContainer,
  MessageContainer,
  MessageTitleContainer,
  PaddedContainer,
  PhotoBackground,
  PhotoTitle,
} from './styles';

type ItemListProps = {
  item: IItemMessage;
};

const ItemList: React.FC<ItemListProps> = ({ item }: ItemListProps) => {
  const navigation = useNavigation();
  const userName = `${item?.user?.firstName.charAt(0)} ${item?.user?.lastName.charAt(0)}`;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(routes.CHAT, { item: JSON.stringify(item) })}
    >
      <PaddedContainer>
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
            <FirstLineDetailContainer>
              <ContactDetail numberOfLines={1}>
                {item.age}, {item.gender}.
              </ContactDetail>
              <DefaultIcon color="secondary" iconFamily="Feather" name="map-pin" size={14} />
              <ContactDetail numberOfLines={1}> {item.location}.</ContactDetail>
            </FirstLineDetailContainer>
            <ContactDetail numberOfLines={1}>
              {`Interest: ${item?.interests?.join(', ')}`}
            </ContactDetail>
          </DetailsContainer>
          <IconContainer>
            <DefaultIcon color="secondary" iconFamily="Feather" name="send" size={18} />
          </IconContainer>
        </MessageContainer>
      </PaddedContainer>
    </TouchableOpacity>
  );
};

export default ItemList;
