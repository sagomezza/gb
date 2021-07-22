import React from 'react';
import { Input } from 'components';
import { View } from 'react-native';
import { ButtonModal } from 'components/ModalAlert/styles';
import { useForm, Controller } from 'react-hook-form';
import {
  AddBulletinButtonContainer,
  DescriptionInputContainer,
  NewBulletinContainer,
  TitleInputContainer,
} from './styles';

const NewBulletin: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = () => {};

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
          />
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
          />
        </DescriptionInputContainer>
      </View>

      <AddBulletinButtonContainer>
        <ButtonModal onPress={handleSubmit(onSubmit)}>Add Bulletin</ButtonModal>
      </AddBulletinButtonContainer>
    </NewBulletinContainer>
  );
};

export default NewBulletin;
