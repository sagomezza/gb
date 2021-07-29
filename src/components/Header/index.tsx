import React, { useMemo } from 'react';
import { PremiumRoutes, RoutesLabels, RoutesTypes } from 'config/routes';
import PremiumBadge from 'components/PremiumBadge';
import { HeaderContainer, PremiumBadgeAbsoluteContainer, Title } from './styles';

interface IHeaderProps {
  route?: RoutesTypes;
  title?: string;
}

const Header: React.FC<IHeaderProps> = ({ route, title }: IHeaderProps) => {
  const routeIsPremium = useMemo(() => route && !!PremiumRoutes[route], [route]);

  return (
    <HeaderContainer>
      <Title>{(route && RoutesLabels[route]) || title}</Title>
      {routeIsPremium && (
        <PremiumBadgeAbsoluteContainer>
          <PremiumBadge />
        </PremiumBadgeAbsoluteContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
