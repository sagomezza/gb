import { Image, Text, View } from 'react-native';
import styled from 'styled-components';
import { nlz, rs } from 'utils/dimensions';

export const Picture = styled(Image).attrs({
  resizeMode: 'cover',
})`
  border-top-left-radius: ${rs(10)}px;
  border-top-right-radius: ${rs(10)}px;
  height: ${rs(146)}px;
  width: 100%;
`;

export const DataContainer = styled(View)`
  padding-bottom: ${rs(32)}px;
  padding-left: ${rs(32)}px;
  padding-right: ${rs(32)}px;
  padding-top: ${rs(16)}px;
`;

export const Title = styled(Text)`
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(26)}px;
  font-weight: bold;
`;

export const PostedBy = styled(Text)`
  color: ${({ theme: { colors } }) => colors.gray1};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(12)}px;
  letter-spacing: 2px;
  margin-bottom: ${rs(12)}px;
  margin-top: ${rs(12)}px;
  text-transform: uppercase;
`;

export const Description = styled(Text)`
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(12)}px;
`;
