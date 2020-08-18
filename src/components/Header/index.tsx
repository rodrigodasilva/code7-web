import React from 'react';

import Button from '../Button';

import { Container, MaxWidth, Logo } from './styles';

interface HeaderProps {
  openModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ openModal }) => {
  return (
    <Container>
      <MaxWidth>
        <Logo>Code7</Logo>

        <Button onClick={() => openModal()}>Adicionar</Button>
      </MaxWidth>
    </Container>
  );
};

export default Header;
