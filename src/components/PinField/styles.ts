import styled from 'styled-components';
import { StyleSheet, View, Text } from 'react-native';
import { rs, nlz } from 'utils/dimensions';

export const Container = styled(View)`
  background-color: ${({ theme }) => theme.colors.white};
  padding-horizontal: ${rs(16)}px;
`;

export const Cell = styled(View)`
  align-items: center;
  aspect-ratio: 1;
  background-color: ${({ theme }) => theme.codeField.background};
  border-color: ${({ theme }) => theme.codeField.border};
  border-radius: ${rs(8)}px;
  border-width: ${rs(1)}px;
  flex: 1;
  height: ${rs(82)}px;
  justify-content: center;
  margin-horizontal: ${rs(8)}px
  overflow: visible;
`;

export const NumberText = styled(Text)`
  align-self: center;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${nlz(23)}px;
  text-align: center;
`;

export const Label = styled(Text)`
  align-self: flex-start;
  color: ${({ theme }) => theme.codeField.label};
  font-size: ${nlz(20)}px;
  margin-horizontal: ${rs(8)}px;
  margin-vertical: ${rs(16)}px;
  text-align: left;
`;

export const ErrorLabel = styled(Text)`
  align-self: flex-start;
  color: ${({ theme }) => theme.codeField.label};
  font-size: ${nlz(20)}px;
  margin-horizontal: ${rs(8)}px;
  margin-vertical: ${rs(16)}px;
  text-align: left;
`;

export const styles = StyleSheet.create({
  codeFieldRoot: {
    flex: 1,
    backgroundColor: 'transparent',
    marginBottom: rs(8),
  },
});
