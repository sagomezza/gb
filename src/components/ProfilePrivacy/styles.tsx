import styled from 'styled-components';
import { View } from 'react-native';
import { rs, nlz } from 'utils/dimensions';
import Text from 'components/Text';

export const Container = styled(View)`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-vertical: ${rs(8)}px;
`;

export const Label = styled(Text)`
  align-self: flex-start;
  color: ${({ theme }) => theme.text.darkGray};
  flex: 1;
  font-size: ${nlz(16)}px;
  text-align: left;
`;
