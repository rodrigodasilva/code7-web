import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import CustomContainerToast from './components/ContainerToast';

import Routes from './routes';
import GlobalStyle from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>
    <GlobalStyle />
    <CustomContainerToast />
  </Router>
);

export default App;
