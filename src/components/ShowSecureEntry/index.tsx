//Libs
import React from 'react';
import styled from 'styled-components/native';
//Components
import { LinkButton } from '../Button';
import Spacing from '../Spacing';

type Props = {
  label: string;
  show: boolean;
  onPress: () => void;
};

const Container = styled.View`
  align-self: flex-start;
`;

export default function ShowSecureEntry({ label, show, onPress }: Props) {
  return (
    <Container>
      <LinkButton icon={show ? 'eye-off' : 'eye'} onPress={onPress}>
        <Spacing isHorizontal={true} />
        {label}
      </LinkButton>
    </Container>
  );
}
