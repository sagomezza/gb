import React from 'react';
import { Checkbox } from 'components';
import { TrainerCheckboxContainer, TrainerLabel } from './styles';

interface ITrainerCheckProps {
  checked: boolean;
}

const TrainerCheck: React.FC<ITrainerCheckProps> = ({ checked }: ITrainerCheckProps) => (
  <>
    <TrainerCheckboxContainer>
      <Checkbox checked={checked} />
    </TrainerCheckboxContainer>
    <TrainerLabel>Trainer</TrainerLabel>
  </>
);

export default TrainerCheck;
