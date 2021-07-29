import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { theme } from 'config/theme';
import { Spot } from 'store/types';
import {
  ContactName,
  ContactPhoto,
  DetailsContainer,
  SendIconContainer,
  ContactDetail,
  CardContainer,
  CardTitleContainer,
  FirstLineDetailContainer,
  MapIconContainer,
} from './styles';

interface ICardProps {
  item: Spot;
}

const Card: React.FC<ICardProps> = ({ item }: ICardProps) => (
  <CardContainer>
    <ContactPhoto source={{ uri: item.picture }} />

    <DetailsContainer>
      <CardTitleContainer>
        <ContactName>{item.name}</ContactName>
        <SendIconContainer>
          <Icon color={theme.colors.darkGreenModal} name="send" size={25} />
        </SendIconContainer>
      </CardTitleContainer>

      <View>
        <FirstLineDetailContainer>
          <ContactDetail numberOfLines={1}>
            {item.age}, {item.gender}.
          </ContactDetail>
          <MapIconContainer>
            <Icon color={theme.colors.darkGreenModal} name="map-pin" size={18} />
          </MapIconContainer>
          <ContactDetail numberOfLines={1}>{item.location}.</ContactDetail>
        </FirstLineDetailContainer>

        <ContactDetail numberOfLines={1}>Interest: {item.interests?.join(', ')}</ContactDetail>
      </View>
    </DetailsContainer>
  </CardContainer>
);

export default Card;
