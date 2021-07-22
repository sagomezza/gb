import TouchableOpacity from 'core/components/TouchableBounce/TouchableBounce';
import React, { useMemo } from 'react';
import InsetShadow from 'react-native-inset-shadow';
import { Checkbox as BaseCheckbox, InsetShadowContainerStyles } from './styles';

interface ICheckboxProps {
  checked: boolean;
  onCheck?: () => void;
}

const Checkbox: React.FC<ICheckboxProps> = ({ checked, onCheck }: ICheckboxProps) => {
  const content = useMemo(() => {
    const baseCheckbox = <BaseCheckbox checked={checked} />;
    if (onCheck) {
      return <TouchableOpacity onPress={onCheck}>{baseCheckbox}</TouchableOpacity>;
    }

    return baseCheckbox;
  }, [checked, onCheck]);

  return (
    <InsetShadow
      containerStyle={InsetShadowContainerStyles}
      shadowOffset={5}
      shadowOpacity={0.35}
      shadowRadius={checked ? 0 : 2.5}
    >
      {content}
    </InsetShadow>
  );
};

export default Checkbox;
