import { Text, View } from 'react-native';
import styled from 'styled-components';
import { withProps } from 'utils/bypass';
import { nlz, rs } from 'utils/dimensions';

export const MainContainer = styled(View)`
  width: 100%;
`;

interface IMenuItemContainerProps {
  omitBottomBorder?: boolean;
}

export const MenuItemContainer = withProps<IMenuItemContainerProps>()(styled(View))`
  align-items: center;
  border-bottom-color: ${({ omitBottomBorder, theme: { colors } }) =>
    !omitBottomBorder ? colors.gray1 : 'transparent'};
  border-bottom-width: 1px;
  flex-direction: row;
  height: ${rs(88)}px;
  justify-content: space-between;
  padding-left: ${rs(48)}px;
  padding-right: ${rs(48)}px;
  width: 100%;
`;

export const Title = styled(Text)`
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(16)}px;
  margin-left: ${rs(16)}px;
`;

export const IconAndLabelContainer = styled(View)`
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`;

export const PremiumLabel = styled(Text)`
  color: ${({ theme: { colors } }) => colors.secondary};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(12)}px;
  margin-left: ${rs(8)}px;
`;

export const PremiumBadgeContainer = styled(View)`
  align-items: center;
  flex-direction: row;
`;
