import React from 'react';

import Header from '../../../components/Header';

import { MaxWidth, Container } from './styles';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <MaxWidth>{children}</MaxWidth>
    </Container>
  );
};

export default DefaultLayout;
