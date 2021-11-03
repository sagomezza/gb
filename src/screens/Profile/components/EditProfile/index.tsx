import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { navigator } from 'navigation';
import { ActivityIndicator, Spacing } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import FormInputNative from 'components/FormInputNative';
import routes from 'config/routes';
import { saveProfileInfo } from 'store/app/appActions';
import { capitalize } from 'utils/capitalize';
import { useFocusEffect } from '@react-navigation/native';
import { getUserId } from 'store/auth/authSelectors';
import { getUserQuery } from 'service/queries';
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
  const [categories, setCategories] = useState([]);
  const { goToPage } = navigator();
  const dispatch = useDispatch();
  const userID = useSelector(getUserId);

  const { isLoading, refetch } = getUserQuery(
    { id: userID },
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        const categories = data.getUser?.setting?.categories;
        if (categories != null) {
          if (categories.length >= 0) {
            setCategories(categories);
          }
        }
      },
    },
  );

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch]),
  );

  const submitHandler = useCallback(
    (data: IEditProfileForm) => {
      onSubmit(data);
    },
    [onSubmit],
  );

  useEffect(() => {
    setValue('isTrainer', userData?.isTrainer);
    setValue('photo', userData?.photo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnPress = (value: boolean) => {
    if (!value) {
      const formValues = getValues();
      const editProfileInfo = {
        description: formValues.description,
        name: formValues.name,
        photo: userData?.photo,
        premium: false,
        isTrainer: formValues.isTrainer,
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
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <InterestsContainer>
          {categories.map((interest) => (
            <InterestBubble
              key={`profileScreen.interest.${interest}`}
              label={capitalize(interest)}
            />
          ))}
          <AddButton onPress={() => goToPage(routes.ONBOARDINGSKILLS)}>
            <EditionButtonLabel addLabel>Add +</EditionButtonLabel>
          </AddButton>
        </InterestsContainer>
      )}
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
