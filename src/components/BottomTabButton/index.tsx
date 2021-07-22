import { theme } from 'config/theme';
import { FontFamilyType } from 'core/components/DefaultIcon';
import React from 'react';
import { DefaultIcon } from '../../core/components';
import { ButtonContainer, MainContainer, Label, SelectionBar } from './styles';

interface IBottomTabButtonProps {
  focused: boolean;
  iconFamily: FontFamilyType;
  iconName: string;
  label: string;
}

const BottomTabButton: React.FC<IBottomTabButtonProps> = ({
  focused,
  iconFamily,
  iconName,
  label,
}: IBottomTabButtonProps) => (
  <MainContainer>
    <SelectionBar focused={focused} />
    <ButtonContainer>
      <DefaultIcon
        color={focused ? theme.colors.secondary : theme.colors.black}
        iconFamily={iconFamily}
        name={iconName}
        size={20}
      />
      <Label focused={focused}>{label}</Label>
    </ButtonContainer>
  </MainContainer>
);

export default BottomTabButton;
