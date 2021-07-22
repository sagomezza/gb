import { View, ViewStyle } from 'react-native';
import styled from 'styled-components';
import { withProps } from 'utils/bypass';
import { rs } from 'utils/dimensions';

interface ICheckboxProps {
  checked: boolean;
}

export const Checkbox = withProps<ICheckboxProps>()(styled(View))`
  background-color: ${({ checked, theme: { colors } }) => {
    if (checked) {
      return colors.secondary;
    }

    return 'transparent';
  }};
  height: 100%;
  width: 100%;
  border-color: ${({ theme: { colors } }) => colors.primary};
  border-width: ${({ checked }) => rs(checked ? 2 : 0)}px;
`;

export const InsetShadowContainerStyles: ViewStyle = {
  borderRadius: rs(3),
  width: '100%',
};
