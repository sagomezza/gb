import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { navigator } from 'navigation';
import { Spacing } from 'components';
import FormInputNative from 'components/FormInputNative';
import routes from 'config/routes';
import { saveProfileInfo, toggleEditProfile, showModalAlert } from 'store/app/appActions';
import { useDispatch } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {
  InterestsContainer,
  TrainerCheckContainer,
  EditionButton as SubmitButton,
  EditionButtonLabel,
} from '../../styles';
import { IEditProfileForm, IEditProfileProps } from '../../types';
import InterestBubble from '../InterestBubble';
import TrainerCheck from '../TrainerCheck';
import { AddButton, FormContainer, InputName, SubmitButtonContainer } from './styles';

const EditProfile: React.FC<IEditProfileProps> = ({ onSubmit, userData }: IEditProfileProps) => {
  const {
    control,
    formState: { errors },
    getValues,
    handleSubmit,
    setValue,
  } = useForm({ mode: 'onBlur' });
  const { goToPage } = navigator();
  const dispatch = useDispatch();

  const onCreateErrorHandler = () => {
    dispatch(
      showModalAlert({
        title: 'Oops',
        text: 'Something has happened, please try again later',
        textButton: 'Ok',
        type: 'error',
        visible: true,
      }),
    );
  };

  const onConnectionErrorHandler = () => {
    dispatch(
      showModalAlert({
        title: 'Error',
        text: "It seems that you're not connected to Internet",
        textButton: 'Ok',
        type: 'error',
        visible: true,
      }),
    );
  };

  const submitHandler = useCallback(
    (data: IEditProfileForm) => {
      NetInfo.fetch().then(async (state) => {
        if (!state.isConnected) {
          onConnectionErrorHandler();
        } else {
          try {
            // mutation
            dispatch(
              showModalAlert({
                title: 'Success!',
                text: 'Profile updated',
                textButton: 'Ok',
                type: 'confirm',
                visible: true,
              }),
            );
            dispatch(toggleEditProfile(false));
            onSubmit(data);
          } catch (error) {
            onCreateErrorHandler();
          }
        }
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onSubmit, dispatch],
  );

  useEffect(() => {
    setValue('interests', userData?.interests);
    setValue('isTrainer', userData?.isTrainer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnPress = (value: boolean) => {
    if (!value) {
      const formValues = getValues();
      const editProfileInfo = {
        description: formValues.description,
        name: formValues.name,
        isTrainer: formValues.isTrainer,
        interests: formValues.interests,
      };
      dispatch(saveProfileInfo(editProfileInfo));
      goToPage(routes.GOPREMIUM);
      return;
    }
    setValue('isTrainer', !value);
  };

  return (
    <FormContainer>
      <Spacing size={15} />
      <InputName
        control={control}
        defaultValue={userData.name}
        error={errors.name}
        errorText={errors.name?.message}
        keyboardType="default"
        name="name"
        placeholder="Full name"
        rules={{
          required: {
            value: true,
            message: 'Name is required',
          },
        }}
      />
      <Spacing size={15} />
      <InterestsContainer>
        {userData?.interests?.map((interest) => (
          <InterestBubble key={`profileScreen.interest.${interest.id}`} label={interest.name} />
        ))}
        <AddButton onPress={() => goToPage(routes.ONBOARDINGSKILLS)}>
          <EditionButtonLabel addLabel>Add +</EditionButtonLabel>
        </AddButton>
      </InterestsContainer>
      <FormInputNative
        multiline
        control={control}
        defaultValue={userData.description}
        error={errors.description}
        errorText={errors.description?.message}
        keyboardType="default"
        name="description"
        placeholder="Description"
        rules={{
          required: {
            value: true,
            message: 'Description is required',
          },
        }}
      />
      <TrainerCheckContainer>
        <TrainerCheck checked={userData?.isTrainer} onPress={handleOnPress} />
      </TrainerCheckContainer>
      <Spacing />
      <SubmitButtonContainer>
        <SubmitButton onPress={handleSubmit(submitHandler)}>
          <EditionButtonLabel>Save</EditionButtonLabel>
        </SubmitButton>
      </SubmitButtonContainer>
    </FormContainer>
  );
};

export default EditProfile;
