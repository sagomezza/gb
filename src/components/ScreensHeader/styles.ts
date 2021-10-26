import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { nlz, rs } from 'utils/dimensions';

type TitleContainerProps = {
  isGoBack?: boolean;
};

export const MainContainer = styled.View`
  padding-bottom: ${rs(5)}px;
  padding-horizontal: ${rs(10)}px;
  padding-top: ${Platform.OS === 'android' ? rs(20) : 0}px;
  width: 100%;
`;

export const PaddedContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: ${({ justifyContent }) => justifyContent};
  width: 100%;
`;

export const TitleContainer = styled.View<TitleContainerProps>`
  align-items: center;
  flex: 1;
  justify-content: center;
  right: ${(props) => (props.isGoBack ? rs(14) : 0)}px;
`;

export const HeaderText = styled.Text`
  color: ${({ theme: { colors } }) => colors.black};
  font-family: ${({ theme: { fonts } }) => fonts.medium.fontFamily};
  font-size: ${nlz(16)}px;
  font-weight: 500;
`;

export const ButtonContainer = styled.TouchableOpacity`
  elevation: 10;
  z-index: 10;
`;
