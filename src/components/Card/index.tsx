import React from 'react';
import { ViewStyle } from 'react-native';
import { CardContainer, shadowCardStyles } from './styles';

interface ICardProps {
  children: React.ReactNode | React.ReactNodeArray;
  renderShadow?: boolean;
  style?: ViewStyle;
}

const Card: React.FC<ICardProps> = ({ children, renderShadow = true, style = {} }: ICardProps) => (
  <CardContainer
    style={{
      ...(renderShadow ? shadowCardStyles.shadow : {}),
      ...style,
    }}
  >
    {children}
  </CardContainer>
);

export default Card;
