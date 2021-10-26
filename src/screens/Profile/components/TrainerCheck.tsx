import React, { useState } from 'react';
import { Checkbox } from 'components';
import { TrainerCheckboxContainer, TrainerLabel } from '../styles';

interface ITrainerCheckProps {
  checked: boolean;
  onPress?: (value: boolean) => void;
}

const TrainerCheck: React.FC<ITrainerCheckProps> = ({ checked, onPress }: ITrainerCheckProps) => {
  const [isTrainer, setIsTrainer] = useState(checked);
  return (
    <>
      <TrainerCheckboxContainer>
        <Checkbox
          status={isTrainer ? 'checked' : 'unchecked'}
          onPress={() => {
            if (isTrainer) setIsTrainer(!isTrainer);
            onPress(isTrainer);
          }}
        />
      </TrainerCheckboxContainer>
      <TrainerLabel>Trainer</TrainerLabel>
    </>
  );
};

export default TrainerCheck;
