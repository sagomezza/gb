import React from 'react';
import { DefaultIcon } from 'components';
import { PremiumBadgeContainer, PremiumLabel } from './styled';

const PremiumBadge: React.FC = () => (
  <PremiumBadgeContainer>
    <DefaultIcon color="secondary" iconFamily="AntDesign" name="star" size={14} />
    <PremiumLabel>Premium</PremiumLabel>
  </PremiumBadgeContainer>
);

export default PremiumBadge;
