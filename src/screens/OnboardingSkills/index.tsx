import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { xorBy } from 'lodash';
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
        <ButtonSignup onPress={() => {}}>Ready</ButtonSignup>
      </OnboardingContainer>
    </>
  );
};

export default OnboardingSkillsScreen;
