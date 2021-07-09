import React from 'react';
import { HeaderContainer, Title } from './styled';

interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = ({ title }: IHeaderProps) => (
  <HeaderContainer>
    <Title>{title}</Title>
  </HeaderContainer>
);

export default Header;
