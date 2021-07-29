import React, { useMemo, useState } from 'react';
import { DefaultIcon, GoPremiumModal, PremiumBadge } from 'components';
import { FontFamilyType } from 'components/DefaultIcon';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PremiumRoutes, RoutesLabels, RoutesTypes } from 'config/routes';
import { IconAndLabelContainer, MenuItemContainer, Title } from './styles';

interface IMenuItemProps {
  iconFamily: FontFamilyType;
  iconName: string;
  iconSize?: number;
  omitBottomBorder?: boolean;
  route: RoutesTypes;
}

const IS_USER_PREMIUM = true;

const MenuItem: React.FC<IMenuItemProps> = ({
  iconFamily,
  iconName,
  iconSize = 24,
  omitBottomBorder = false,
  route,
}: IMenuItemProps) => {
  const isUserPremium = IS_USER_PREMIUM;
  const navigation = useNavigation();
  const routeRequiresPremium = useMemo(() => !!PremiumRoutes[route], [route]);

  const [goPremiumModalVisible, setGoPremiumModalVisibility] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          if (routeRequiresPremium && !isUserPremium) {
            setGoPremiumModalVisibility(true);
            return;
          }
          navigation.navigate(route);
        }}
      >
        <MenuItemContainer omitBottomBorder={omitBottomBorder}>
          <IconAndLabelContainer>
            <DefaultIcon color="black" iconFamily={iconFamily} name={iconName} size={iconSize} />
            <Title>{RoutesLabels[route]}</Title>
          </IconAndLabelContainer>

          {routeRequiresPremium && <PremiumBadge />}
        </MenuItemContainer>
      </TouchableOpacity>

      <GoPremiumModal
        visible={goPremiumModalVisible}
        onClose={() => setGoPremiumModalVisibility(false)}
      />
    </>
  );
};

export default MenuItem;
