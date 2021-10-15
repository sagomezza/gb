/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Card, GBScreenHeader } from 'components';
import routes from 'config/routes';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEditProfile } from 'store/app/appActions';
import { getEditProfileState } from 'store/app/appSelectors';
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
} from './styles';
import InterestBubble from './components/InterestBubble';
import EditionButton from './components/EditionButton';
import { ProfileScreenMockData } from './mock-data';
import EditProfile from './components/EditProfile';
import { IEditProfileForm } from './types';

const ProfileScreen: React.FC = () => {
  const dispatch = useDispatch();
  const data = ProfileScreenMockData;
  const editProfileState = useSelector(getEditProfileState);

  const onSubmitHandler = (dataForm: IEditProfileForm) => {
    console.log(dataForm);
  };

  useEffect(() => {
    dispatch(toggleEditProfile(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView>
      <GBScreenHeader title={routes.PROFILE} />
      <MainContainer>
        <Card renderShadow>
          <ScrollView showsVerticalScrollIndicator={false}>
            <ProfilePicture source={data.profilePicture} />
            {editProfileState ? (
              <EditProfile
                userData={{
                  description: data.description,
                  name: data.name,
                  isTrainer: data.isTrainer,
                  interests: data.interests,
                }}
                onSubmit={onSubmitHandler}
              />
            ) : (
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
                  <EditionButton
                    onPress={() => {
                      dispatch(toggleEditProfile(true));
                    }}
                  />
                </EditionButtonContainer>
              </MetadataContainer>
            )}
          </ScrollView>
        </Card>
      </MainContainer>
    </SafeAreaView>
  );
};

export default ProfileScreen;
