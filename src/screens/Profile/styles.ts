import { Image, View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { nlz, rs } from 'utils/dimensions';
import { DefaultIcon } from 'components';

export const MainContainer = styled(View)`
  padding-bottom: ${rs(64)}px;
  padding-left: ${rs(18)}px;
  padding-right: ${rs(18)}px;
  padding-top: ${rs(16)}px;
`;

export const ProfilePicture = styled(Image).attrs({
  resizeMode: 'cover',
})`
  border-top-left-radius: ${rs(10)}px;
  border-top-right-radius: ${rs(10)}px;
  height: ${rs(214)}px;
  width: 100%;
`;

export const MetadataContainer = styled(View)`
  padding-bottom: ${rs(36)}px;
  padding-left: ${rs(20)}px;
  padding-right: ${rs(20)}px;
  padding-top: ${rs(14)}px;
  width: 100%;
`;

export const NameAndMessageIconContainer = styled(View)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const MessageIcon = styled(DefaultIcon).attrs({
  color: 'secondary',
  iconFamily: 'Ionicons',
  name: 'paper-plane-outline',
  size: 26,
})``;

export const Name = styled(Text)`
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(28)}px;
  font-weight: bold;
`;

export const AgeAndCity = styled(Text)`
  color: ${({ theme: { colors } }) => colors.gray1};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(14)}px;
  letter-spacing: 2px;
  margin-bottom: ${rs(8)}px;
  margin-top: ${rs(6)}px;
  text-transform: uppercase;
`;

export const InterestsContainer = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: ${rs(4)}px;
  margin-top: ${rs(4)}px;
`;

export const InterestBubbleContainer = styled(View)`
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.chipBlue};
  border-radius: ${rs(15)}px;
  flex-direction: row;
  height: ${rs(32)}px;
  justify-content: center;
  margin: ${rs(4)}px;
  min-width: ${rs(86)}px;
  padding-left: ${rs(12)}px;
  padding-right: ${rs(12)}px;
`;

export const InterestBubbleLabel = styled(Text)`
  color: ${({ theme: { colors } }) => colors.darkBlue};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(13)}px;
  letter-spacing: 1.55px;
`;

export const DescriptionContainer = styled(View)`
  margin-bottom: ${rs(8)}px;
  margin-top: ${rs(14)}px;
  width: 100%;
`;

export const Description = styled(Text)`
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(13)}px;
`;

export const EditionButtonContainer = styled(View)`
  align-items: flex-start;
  margin-bottom: ${rs(8)}px;
  margin-top: ${rs(16)}px;
  width: 100%;
`;

export const EditionButton = styled(TouchableOpacity)`
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.onSecondary};
  border-radius: ${rs(25)}px;
  flex-direction: row;
  height: ${rs(45)}px;
  justify-content: center;
  width: ${rs(120)}px;
`;

export const EditionButtonLabel = styled(Text)`
  color: ${({ theme: { colors } }) => colors.secondary};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(16)}px;
`;

export const TrainerCheckContainer = styled(View)`
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: ${rs(54)}px;
`;

export const TrainerCheckboxContainer = styled(View)`
  height: ${rs(24)}px;
  margin-left: ${rs(16)}px;
  margin-right: ${rs(12)}px;
  width: ${rs(24)}px;
`;

export const TrainerLabel = styled(Text)`
  color: ${({ theme: { colors } }) => colors.secondary};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(20)}px;
`;
