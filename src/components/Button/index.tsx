import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'small' | 'default' | 'big';
  color?: 'primary' | 'secundary' | 'cancel' | 'danger';
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  children,
  loading,
  ...rest
}) => (
  <Container color={color} type="button" {...rest}>
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;
