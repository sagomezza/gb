import React, { useCallback } from 'react';
import { ActivityIndicator, Input, Typography } from 'components';
import { View } from 'react-native';
import { ButtonModal } from 'components/ModalAlert/styles';
import { useForm, Controller } from 'react-hook-form';
import { useFocusEffect } from '@react-navigation/core';
import { createBulletinMutation } from 'service/mutations';
import { useQueryClient } from 'react-query';
import { getUserId } from 'store/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { showModalAlert } from 'store/app/appActions';
import {
  AddBulletinButtonContainer,
  DescriptionInputContainer,
  NewBulletinContainer,
  TitleInputContainer,
} from './styles';

type TNewBulletinForm = {
  description: string;
  title: string;
};

const NewBulletin: React.FC = () => {
  const queryClient = useQueryClient();
  const userID = useSelector(getUserId);
  const dispatch = useDispatch();
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });

  const { isLoading, mutateAsync } = createBulletinMutation();

  const onSubmit = useCallback(async (data: TNewBulletinForm) => {
    const input = {
      bulletinOwnerId: userID,
      description: data.description,
      title: data.title,
      eventDate: new Date().toLocaleDateString(),
      photos: ['https://picsum.photos/id/1023/1200/800'],
    };

    try {
      await mutateAsync(
        { input },
        {
          onSuccess: () => {
            queryClient.cancelQueries('ListBulletins');
            reset();
            dispatch(
              showModalAlert({
                title: '',
                text: 'The bulletin has been successfully created',
                textButton: 'Ok',
                type: 'success',
                visible: true,
              }),
            );
          },
        },
      );
    } catch (error) {
      onUpdateErrorHandler();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onUpdateErrorHandler = () => {
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

  useFocusEffect(
    useCallback(() => {
      reset();
    }, [reset]),
  );

  return (
    <NewBulletinContainer>
      <View>
        <TitleInputContainer>
          <Controller
            control={control}
            defaultValue=""
            name="title"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Title"
                value={value}
                onChangeText={(newText) => onChange(newText)}
              />
            )}
            rules={{
              required: {
                value: true,
                message: 'Title is required',
              },
            }}
          />
          {!!errors.title && (
            <Typography color="error" size={11}>
              {errors.title?.message}
            </Typography>
          )}
        </TitleInputContainer>
        <DescriptionInputContainer>
          <Controller
            control={control}
            defaultValue=""
            name="description"
            render={({ field: { onChange, value } }) => (
              <Input
                multiline
                placeholder="Description"
                value={value}
                onChangeText={(newText) => onChange(newText)}
              />
            )}
            rules={{
              required: {
                value: true,
                message: 'Description is required',
              },
            }}
          />
          {!!errors.description && (
            <Typography color="error" size={11}>
              {errors.description?.message}
            </Typography>
          )}
        </DescriptionInputContainer>
      </View>

      <AddBulletinButtonContainer>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <ButtonModal onPress={handleSubmit(onSubmit)}>Add Bulletin</ButtonModal>
        )}
      </AddBulletinButtonContainer>
    </NewBulletinContainer>
  );
};

export default NewBulletin;
