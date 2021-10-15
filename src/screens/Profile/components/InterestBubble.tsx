import React from 'react';
import { InterestBubbleContainer as Container, InterestBubbleLabel as Label } from '../styles';

interface IInterestBubbleProps {
  label: string;
}

const InterestBubble: React.FC<IInterestBubbleProps> = ({ label }: IInterestBubbleProps) => (
  <Container>
    <Label>{label}</Label>
  </Container>
);

export default InterestBubble;
