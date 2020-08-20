import React, { ButtonHTMLAttributes } from 'react';

import { Spinner } from '../Spinner';

import { Container, ContainerLoading } from './styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'small' | 'default' | 'big';
  color?: 'primary' | 'cancel' | 'danger' | 'clean';
  isLoading?: boolean;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  children,
  isLoading,
  disabled,
  ...rest
}) => (
  <Container
    color={color}
    type="button"
    disabled={isLoading || disabled}
    isLoading={isLoading}
    {...rest}
  >
    {children}

    {isLoading && (
      <ContainerLoading>
        <Spinner size={14} />
      </ContainerLoading>
    )}
  </Container>
);

export default Button;
