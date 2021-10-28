import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Card, GBScreenHeader } from 'components';
import routes from 'config/routes';
import { useDispatch, useSelector } from 'react-redux';
import { hideModalAlert, showModalAlert, toggleEditProfile } from 'store/app/appActions';
import { getEditProfileState, getModalAlertState } from 'store/app/appSelectors';
import { getUserId } from 'store/auth/authSelectors';
import { useQueryClient } from 'react-query';
import { GetUserQuery } from 'lib/api';
import { capitalize } from 'utils/capitalize';
import { updateUserMutation } from 'service/mutations';
import { ModalAlert } from 'components/ModalAlert';
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
import EditProfile from './components/EditProfile';
import { IEditProfileForm } from './types';

const ProfileScreen: React.FC = () => {
  const dispatch = useDispatch();
  const editProfileState = useSelector(getEditProfileState);
  const userID = useSelector(getUserId);
  const queryClient = useQueryClient();
  const modalAlertState = useSelector(getModalAlertState);

  const { mutateAsync } = updateUserMutation();

  const userData = queryClient.getQueryData<GetUserQuery>([
    'GetUser',
    {
      id: userID,
    },
  ]);

  const userCategories = userData?.getUser?.setting?.categories;
  const profile = userData?.getUser;

  const onSubmitHandler = async (dataForm: IEditProfileForm) => {
    const input = {
      id: userID,
      description: dataForm.description,
      name: dataForm.name,
      premium: false,
      trainer: dataForm.isTrainer,
    };
    try {
      await mutateAsync(
        { input },
        {
          onSuccess: (data) => {
            queryClient.setQueryData<GetUserQuery>(
              [
                'GetUser',
                {
                  id: userID,
                },
              ],
              {
                // @ts-ignore
                getUser: data.updateUser,
              },
            );
            dispatch(
              showModalAlert({
                title: 'Well Done!',
                text: `Your profile has been updated successfully`,
                textButton: '',
                type: 'sucess',
                visible: true,
              }),
            );
            dispatch(toggleEditProfile(false));
          },
        },
      );
    } catch (error) {
      handleErrorUpdate();
    }
  };

  const handleErrorUpdate = () =>
    dispatch(
      showModalAlert({
        title: 'Error',
        text: `An error has occurred, please try again later`,
        textButton: 'Ok',
        type: 'error',
        visible: true,
      }),
    );

  useEffect(() => {
    dispatch(toggleEditProfile(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SafeAreaView>
        <GBScreenHeader title={routes.PROFILE} />
        <MainContainer>
          <Card renderShadow>
            <ScrollView showsVerticalScrollIndicator={false}>
              <ProfilePicture source={{ uri: profile.photo }} />
              {editProfileState ? (
                <EditProfile
                  userData={{
                    description: profile.description,
                    name: profile.name,
                    isTrainer: profile.trainer,
                  }}
                  onSubmit={onSubmitHandler}
                />
              ) : (
                <MetadataContainer>
                  <NameAndMessageIconContainer>
                    <Name>{profile.name}</Name>
                    <MessageIcon />
                  </NameAndMessageIconContainer>
                  <AgeAndCity>{`${profile.age} · ${profile.city}, ${profile.state}`}</AgeAndCity>
                  <InterestsContainer>
                    {userCategories?.map((interest) => (
                      <InterestBubble
                        key={`profileScreen.interest.${interest}`}
                        label={capitalize(interest)}
                      />
                    ))}
                  </InterestsContainer>
                  <DescriptionContainer>
                    <Description>{profile.description}</Description>
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
      <ModalAlert
        hideModal={() => dispatch(hideModalAlert())}
        text={modalAlertState.text}
        textButton={modalAlertState.textButton}
        title={modalAlertState.title}
        type={modalAlertState.type}
        visible={modalAlertState.visible}
        onDismiss={() => dispatch(hideModalAlert())}
      />
    </>
  );
};

export default ProfileScreen;
