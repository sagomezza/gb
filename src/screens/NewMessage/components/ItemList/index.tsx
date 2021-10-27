/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { colors } from 'screens/NewMessage/utils/colors';
import { DefaultIcon } from 'components';
import { useNavigation } from '@react-navigation/native';
import routes from 'config/routes';
import { User } from 'lib/api';
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

const ItemList: React.FC = ({ item }) => {
  console.log(item);
  const navigation = useNavigation();
  const userName = `${item?.name.charAt(0)}`;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(routes.CHAT, { item: JSON.stringify(item) })}
    >
      <PaddedContainer>
        <MessageContainer>
          {item.photo !== '' ? (
            <ContactPhoto source={{ uri: item.photo }} />
          ) : (
            <PhotoBackground background={colors[Math.floor(Math.random() * colors.length)]}>
              <PhotoTitle>{userName}</PhotoTitle>
            </PhotoBackground>
          )}
          <DetailsContainer>
            <MessageTitleContainer>
              <ContactName>{item?.name}</ContactName>
            </MessageTitleContainer>
            <FirstLineDetailContainer>
              <ContactDetail numberOfLines={1}>
                {item.age}, {item.gender}.
              </ContactDetail>
              <DefaultIcon color="secondary" iconFamily="Feather" name="map-pin" size={14} />
              <ContactDetail numberOfLines={1}> {item.city}.</ContactDetail>
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
