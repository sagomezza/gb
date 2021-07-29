import React from 'react';
import { View } from 'react-native';
import {
  ButtonSubscribe,
  CardContainer,
  CardFooter,
  CardPrice,
  CardText,
  ItemsContainer,
  PriceContainer,
  TextContainer,
} from './styles';

interface ICardSubscribePrices {
  onPress: () => void;
}

const CardSubcribePrices: React.FC<ICardSubscribePrices> = ({ onPress }: ICardSubscribePrices) => (
  <CardContainer>
    <ItemsContainer>
      <TextContainer>
        <CardText>Monthly</CardText>
        <PriceContainer>
          <CardPrice>$4,99</CardPrice>
          <CardText>/month</CardText>
        </PriceContainer>
        <CardFooter>Recurring monthly biling</CardFooter>
      </TextContainer>
      <View>
        <ButtonSubscribe onPress={onPress}>Subscribe</ButtonSubscribe>
      </View>
    </ItemsContainer>
  </CardContainer>
);

export default CardSubcribePrices;
