import styled from 'styled-components';
import { Text, View } from 'react-native';
import { nlz, rs } from 'utils/dimensions';
import { withProps } from 'utils/bypass';

export const MainContainer = styled(View)`
  height: 100%;
  width: 100%;
`;

export const ButtonContainer = styled(View)`
  align-items: center;
  flex: 1;
  justify-content: center;
  padding-bottom: ${rs(15)}px;
  width: 100%;
`;

interface IFocusedElementProps {
  focused: boolean;
}

export const Label = withProps<IFocusedElementProps>()(styled(Text))`
  color: ${({ focused, theme: { colors } }) => (focused ? colors.secondary : colors.black)};
  font-size: ${nlz(12)}px;
`;

export const SelectionBar = withProps<IFocusedElementProps>()(styled(View))`
  background-color: ${({ focused, theme: { colors } }) =>
    focused ? colors.secondary : colors.gray0};
  height: ${rs(4)}px;
  width: 100%;
`;
