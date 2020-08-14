import React, { useState } from 'react';

import Button from '../Button';

import ModalDebts from '../ModalDebts';

import { Container, MaxWidth, Logo } from './styles';

const Header: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <Container>
      <MaxWidth>
        <Logo>Code7</Logo>

        <Button onClick={() => setModalIsOpen(true)}>Adicionar</Button>

        <ModalDebts
          isOpen={modalIsOpen}
          title="Adicionar divida"
          onClose={() => setModalIsOpen(false)}
        >
          <h2>adicionar</h2>
        </ModalDebts>
      </MaxWidth>
    </Container>
  );
};

export default Header;
