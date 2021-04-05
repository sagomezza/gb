import * as React from 'react';
import styled from 'styled-components/native';
import { Switch as SwitchPaper } from 'react-native-paper';
import { theme } from 'config/theme';
import { Paragraph } from '../Paragraph';

const SwitchContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SwitchGroup = (props) => (
  <SwitchContainer>
    <Paragraph>{props.text}</Paragraph>
    <SwitchPaper color={theme.colors.primary} {...props} />
  </SwitchContainer>
);

const Switch = (props) => <SwitchPaper color={theme.colors.primary} {...props} />;

export default Switch;
