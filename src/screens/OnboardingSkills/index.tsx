import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { navigator } from 'navigation';
import { xorBy } from 'lodash';
import routes from 'config/routes';
import { useSelector } from 'react-redux';
import { getEditProfileState } from 'store/app/appSelectors';
import { getUserId } from 'store/auth/authSelectors';
import { getUserQuery, listCategoryQuery } from 'service/queries';
import { GetUserQuery, UpdateSettingInput, useUpdateSettingMutation } from 'lib/api';
import { useQueryClient } from 'react-query';
import { capitalize } from 'utils/capitalize';
import {
  ButtonSignup,
  OnboardingContainer,
  OnboardingTitle,
  SelectBoxStyled,
  SelectContainer,
} from './styles';

const OnboardingSkillsScreen: React.FC = () => {
  const [listCategories, setListCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { goBack, goToPage } = navigator();
  const editProfileState = useSelector(getEditProfileState);
  const userID = useSelector(getUserId);
  const queryClient = useQueryClient();

  const { mutateAsync } = useUpdateSettingMutation();

  const { data: categoriesData } = listCategoryQuery(undefined, {
    refetchOnWindowFocus: false,
    select: (data) => data.listCategorys?.items || [],
  });

  const { data: userData } = getUserQuery(
    { id: userID },
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        const categories = data.getUser?.setting?.categories;
        if (categories != null) {
          const array = [];
          if (categories.length > 0) {
            categories.forEach((userCategory) => {
              const result = listCategories.find(
                (category) => category.item.toLowerCase() === userCategory.toLowerCase(),
              );
              array.push(result);
            });
            setSelectedCategories(array);
          }
        }
      },
      enabled: listCategories.length > 0,
    },
  );

  const updateUserSettings = async (input: UpdateSettingInput) => {
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
                getUser: {
                  ...userData,
                  setting: data.updateSetting,
                },
              },
            );
          },
        },
      );
    } catch (error) {
      // To Do
    }
  };

  function sortCategories(a, b) {
    if (a.item < b.item) {
      return -1;
    }
    if (a.item > b.item) {
      return 1;
    }
    return 0;
  }

  const formatCategories = () => {
    const listCategories = [];

    if (categoriesData?.length > 0) {
      categoriesData?.forEach((category) => {
        const object = { id: category.id, item: capitalize(category.name) };
        listCategories.push(object);
      });
    }

    listCategories.sort(sortCategories);
    setListCategories(listCategories);
  };

  useEffect(() => {
    if (categoriesData && categoriesData.length && categoriesData.length > 0) formatCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoriesData]);

  const updateCategories = (list) => {
    const categories = [];
    list.forEach((category) => categories.push(category.item.toLowerCase()));
    const input = {
      id: userData?.getUser?.setting?.id!!,
      categories,
    };

    updateUserSettings(input);
  };

  const onMultiChange = () => (item) => {
    setSelectedCategories(xorBy(selectedCategories, [item], 'item'));
    const newArray = xorBy(selectedCategories, [item], 'id');
    updateCategories(newArray);
  };

  const handleOnPress = () => {
    if (editProfileState) goBack();
    goToPage(routes.MAIN);
  };

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      <OnboardingContainer>
        <OnboardingTitle>Select your favorite categories</OnboardingTitle>
        <SelectContainer>
          <SelectBoxStyled
            hideInputFilter
            isMulti
            inputPlaceholder="Select..."
            label=""
            options={listCategories}
            selectedValues={selectedCategories}
            onMultiSelect={onMultiChange()}
            onTapClose={onMultiChange()}
          />
        </SelectContainer>
        <ButtonSignup onPress={handleOnPress}>Ready</ButtonSignup>
      </OnboardingContainer>
    </>
  );
};

export default OnboardingSkillsScreen;
