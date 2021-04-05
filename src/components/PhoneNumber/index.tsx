//Libs
import React from 'react';
import styled from 'styled-components/native';
import { TextInputNumber } from '../TextInput';
import { CaptionLabel } from '../Caption';
import { TextInput } from 'react-native';

const ContainerText = styled.View`
  padding-left: 74px;
`;

const ContainerInput = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

const ContainerWrapper = styled.View`
  max-width: 304px;
  align-self: center;
`;

const PhoneNumber = (props) => (
  <ContainerWrapper>
    <ContainerText>
      <CaptionLabel>{props.textLabel}</CaptionLabel>
    </ContainerText>

    <ContainerInput>
      <TextInputNumber
        style={{
          flexGrow: 1,
        }}
        {...props}
        render={(renderProps) => <TextInput {...renderProps} />}
      />
    </ContainerInput>
  </ContainerWrapper>
);

export default PhoneNumber;
