import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, Image, TouchableOpacity } from 'react-native';
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
import DefaultAvatar from 'assets/imgs/default_photo.jpg';
import { launchImageLibrary } from 'react-native-image-picker';
import TrainerLogo from 'assets/imgs/trainer-logo.svg';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from '../styles';
import {
  Description,
  DescriptionContainer,
  EditionButtonContainer,
  InterestsContainer,
  MainContainer,
  MessageIcon,
  MetadataContainer,
  Name,
  NameAndMessageIconContainer,
  NameContainer,
  ProfilePicture,
} from './styles';
import InterestBubble from './components/InterestBubble';
import EditionButton from './components/EditionButton';
import EditProfile from './components/EditProfile';
import { IEditProfileForm } from './types';

const DEFAULT_AVATAR_URI = Image.resolveAssetSource(DefaultAvatar).uri;

const ProfileScreen: React.FC = () => {
  const dispatch = useDispatch();
  const editProfileState = useSelector(getEditProfileState);
  const userID = useSelector(getUserId);
  const queryClient = useQueryClient();
  const modalAlertState = useSelector(getModalAlertState);
  const [profilePhoto, setProfilePhoto] = useState(undefined);
  const [photo, setPhoto] = useState(undefined);

  const { mutateAsync } = updateUserMutation();

  const userData = queryClient.getQueryData<GetUserQuery>([
    'GetUser',
    {
      id: userID,
    },
  ]);

  const userCategories = userData?.getUser?.setting?.categories;
  const profile = userData?.getUser;

  useEffect(() => {
    if (profile.photo) {
      setProfilePhoto(`data:image/jpeg;base64,${profile.photo}`);
      setPhoto(profile?.photo);

      return;
    }
    setProfilePhoto(DEFAULT_AVATAR_URI);
    setPhoto(undefined);
  }, [profile]);

  const onSubmitHandler = async (dataForm: IEditProfileForm) => {
    const input = {
      id: userID,
      description: dataForm.description,
      name: dataForm.name,
      photo: profile?.photo,
      premium: false,
      trainer: dataForm.isTrainer,
    };
    if (photo != null) {
      input.photo = photo.base64;
    }
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

  const handleUpdatePhoto = () => {
    if (editProfileState) {
      const options = {
        includeBase64: true,
        maxHeight: 200,
        maxWidth: 320,
        mediaType: 'photo',
        selectionLimit: 1,
      };

      launchImageLibrary(options, async (res) => {
        if (res.assets.length > 0) {
          await setProfilePhoto(res.assets[0].uri);
          setPhoto(res.assets[0]);
        }
      });
    }
  };

  useFocusEffect(
    useCallback(() => {
      queryClient.invalidateQueries('GetUser');
    }, [queryClient]),
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
            <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
              <TouchableOpacity disabled={!editProfileState} onPress={handleUpdatePhoto}>
                <ProfilePicture source={{ uri: profilePhoto }} />
              </TouchableOpacity>
              {editProfileState ? (
                <EditProfile
                  userData={{
                    description: profile.description,
                    name: profile.name,
                    isTrainer: profile.trainer,
                    photo: photo.base64 ? photo.base64 : profile?.photo,
                  }}
                  onSubmit={onSubmitHandler}
                />
              ) : (
                <MetadataContainer>
                  <NameAndMessageIconContainer>
                    <NameContainer>
                      <Name>{profile.name}</Name>
                      {profile.trainer && <TrainerLogo />}
                    </NameContainer>
                    <MessageIcon />
                  </NameAndMessageIconContainer>
                  {/* <AgeAndCity>{`${profile.age} · ${profile.city}, ${profile.state}`}</AgeAndCity> */}
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
