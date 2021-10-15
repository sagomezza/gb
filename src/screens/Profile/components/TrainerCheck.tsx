import React from 'react';
import { Checkbox } from 'components';
import { TrainerCheckboxContainer, TrainerLabel } from '../styles';

interface ITrainerCheckProps {
  checked: boolean;
  onPress?: (value: boolean) => void;
}

const TrainerCheck: React.FC<ITrainerCheckProps> = ({ checked, onPress }: ITrainerCheckProps) => (
  <>
    <TrainerCheckboxContainer>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          onPress(checked);
        }}
      />
    </TrainerCheckboxContainer>
    <TrainerLabel>Trainer</TrainerLabel>
  </>
);

export default TrainerCheck;
