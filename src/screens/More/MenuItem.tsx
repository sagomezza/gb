import React from 'react';
import { DefaultIcon } from 'components';
import { FontFamilyType } from 'components/DefaultIcon';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IconAndLabelContainer, MenuItemContainer, Title } from './styled';
import PremiumBadge from './PremiumBadge';

interface IMenuItemProps {
  iconFamily: FontFamilyType;
  iconName: string;
  iconSize?: number;
  isPremium?: boolean;
  navigateTo: string;
  omitBottomBorder?: boolean;
  title: string;
}

const MenuItem: React.FC<IMenuItemProps> = ({
  iconFamily,
  iconName,
  iconSize = 24,
  isPremium = false,
  navigateTo,
  omitBottomBorder = false,
  title,
}: IMenuItemProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(navigateTo);
      }}
    >
      <MenuItemContainer omitBottomBorder={omitBottomBorder}>
        <IconAndLabelContainer>
          <DefaultIcon color="black" iconFamily={iconFamily} name={iconName} size={iconSize} />
          <Title>{title}</Title>
        </IconAndLabelContainer>

        {isPremium && <PremiumBadge />}
      </MenuItemContainer>
    </TouchableOpacity>
  );
};

export default MenuItem;
