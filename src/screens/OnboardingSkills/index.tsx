import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { navigator } from 'navigation';
import { xorBy } from 'lodash';
import routes from 'config/routes';
import { Data } from './example-data';
import {
  ButtonSignup,
  OnboardingContainer,
  OnboardingTitle,
  SelectBoxStyled,
  SelectContainer,
} from './styled';

const OnboardingSkillsScreen: React.FC = () => {
  const [selectedTeams, setSelectedTeams] = useState([]);
  const { goToPage } = navigator();

  function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'));
  }

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
        <ButtonSignup onPress={() => goToPage(routes.SEARCH)}>Ready</ButtonSignup>
      </OnboardingContainer>
    </>
  );
};

export default OnboardingSkillsScreen;
