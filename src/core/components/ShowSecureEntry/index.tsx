// Libs
import React from 'react';
import styled from 'styled-components/native';
// Components
import { LinkButton } from '../Button';
import Spacing from '../Spacing';

type Props = {
  label: string;
  onPress: () => void;
  show: boolean;
};

const Container = styled.View`
  align-self: flex-start;
`;

export default function ShowSecureEntry({ label, onPress, show }: Props) {
  return (
    <Container>
      <LinkButton icon={show ? 'eye-off' : 'eye'} onPress={onPress}>
        <Spacing isHorizontal />
        {label}
      </LinkButton>
    </Container>
  );
}
