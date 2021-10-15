import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { navigator } from 'navigation';
import { xorBy } from 'lodash';
import routes from 'config/routes';
import { useSelector } from 'react-redux';
import { getEditProfileState } from 'store/app/appSelectors';
import { Data } from './example-data';
import {
  ButtonSignup,
  OnboardingContainer,
  OnboardingTitle,
  SelectBoxStyled,
  SelectContainer,
} from './styles';

const OnboardingSkillsScreen: React.FC = () => {
  const [selectedTeams, setSelectedTeams] = useState([]);
  const { goBack, goToPage } = navigator();
  const editProfileState = useSelector(getEditProfileState);

  function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'));
  }

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
            options={Data}
            selectedValues={selectedTeams}
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
