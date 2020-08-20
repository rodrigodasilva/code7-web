import React from 'react';

import 'react-toastify/dist/ReactToastify.css';

import { CustomContainerToast } from './styles';

const ContainerToast: React.FC = () => {
  return <CustomContainerToast autoClose={4500} hideProgressBar />;
};

export default ContainerToast;
