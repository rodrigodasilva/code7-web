import React from 'react';

import { Container, MaxWidth, Content, Logo, User } from './styles';
import { useAuth } from '../../hooks/auth';

interface HeaderProps {
  openModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ openModal }) => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <MaxWidth>
        <Logo>Code7</Logo>

        <Content>
          <button onClick={() => openModal()} type="button">
            Adicionar
          </button>
          <User>
            <strong>{user.name}</strong>
            <button type="button" onClick={() => signOut()}>
              Sair
            </button>
          </User>
        </Content>
      </MaxWidth>
    </Container>
  );
};

export default Header;
