import React, { useMemo } from 'react';
import { PremiumRoutes, RoutesLabels, RoutesTypes } from 'config/routes';
import PremiumBadge from 'components/PremiumBadge';
import { HeaderContainer, PremiumBadgeAbsoluteContainer, Title } from './styles';

interface IHeaderProps {
  route: RoutesTypes;
}

const Header: React.FC<IHeaderProps> = ({ route }: IHeaderProps) => {
  const routeIsPremium = useMemo(() => !!PremiumRoutes[route], [route]);

  return (
    <HeaderContainer>
      <Title>{RoutesLabels[route]}</Title>
      {routeIsPremium && (
        <PremiumBadgeAbsoluteContainer>
          <PremiumBadge />
        </PremiumBadgeAbsoluteContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
