import React from 'react';
import { ScrollView } from 'react-native';
import { Card, Header } from 'components';
import routes from 'config/routes';
import { SafeAreaView } from '../styles';
import {
  AgeAndCity,
  Description,
  DescriptionContainer,
  EditionButtonContainer,
  InterestsContainer,
  MainContainer,
  MessageIcon,
  MetadataContainer,
  Name,
  NameAndMessageIconContainer,
  ProfilePicture,
  TrainerCheckContainer,
} from './styles';
import InterestBubble from './InterestBubble';
import EditionButton from './EditionButton';
import TrainerCheck from './TrainerCheck';
import { ProfileScreenMockData } from './mock-data';

const ProfileScreen: React.FC = () => {
  const data = ProfileScreenMockData;

  return (
    <SafeAreaView>
      <Header route={routes.PROFILE} />
      <MainContainer>
        <Card renderShadow>
          <ScrollView showsVerticalScrollIndicator={false}>
            <ProfilePicture source={data.profilePicture} />
            <MetadataContainer>
              <NameAndMessageIconContainer>
                <Name>{data.name}</Name>
                <MessageIcon />
              </NameAndMessageIconContainer>
              <AgeAndCity>{`${data.age} · ${data.city}, ${data.state}`}</AgeAndCity>
              <InterestsContainer>
                {data?.interests?.map((interest) => (
                  <InterestBubble
                    key={`profileScreen.interest.${interest.id}`}
                    label={interest.name}
                  />
                ))}
              </InterestsContainer>
              <DescriptionContainer>
                <Description>{data.description}</Description>
              </DescriptionContainer>
              <EditionButtonContainer>
                <EditionButton onPress={() => {}} />
              </EditionButtonContainer>
              <TrainerCheckContainer>
                <TrainerCheck checked={data.isTrainer} />
              </TrainerCheckContainer>
            </MetadataContainer>
          </ScrollView>
        </Card>
      </MainContainer>
    </SafeAreaView>
  );
};

export default ProfileScreen;
