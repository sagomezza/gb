//Libs
import React from 'react';
import styled from 'styled-components/native';
//Components
import { Subheading, WarningIcon, PrimaryButton } from 'components';

const Container = styled.View`
  height: 250px;
  justify-content: space-between;
`;
const ContainerActionButtons = styled.View`
  width: 220px;
  align-self: center;
`;

type Props = {
  message: string;
  closeModal: () => void;
};

const ModalWarning = ({ message, closeModal }: Props) => {
  return (
    <Container>
      <WarningIcon />
      <Subheading center>{message}</Subheading>
      <ContainerActionButtons>
        <PrimaryButton onPress={closeModal}>OK</PrimaryButton>
      </ContainerActionButtons>
    </Container>
  );
};

export default ModalWarning;
