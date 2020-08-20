import styled, { css } from 'styled-components';

import { ButtonProps } from './index';

const sizes = {
  small: css`
    padding: 6px 8px;
    font-size: 12px;
  `,
  default: css`
    padding: 10px 12px;
    font-size: 14px;
  `,
  big: css`
    padding: 14px 20px;
    font-size: 15px;
  `,
};

const colors = {
  primary: css`
    background: var(--primary-color);
    color: var(--primary-color-contrast);
  `,
  danger: css`
    background: var(--danger-color);
    color: var(--danger-color-contrast);
  `,
  cancel: css`
    background: transparent;
    border: 1px solid var(--danger-color-lighten);
    color: var(--danger-color-lighten);
  `,
  clean: css`
    background: transparent;
    color: var(--primary-color-contrast);
  `,
};

export const Container = styled.button<ButtonProps>`
  border: 0;
  border-radius: 4px;
  font-weight: bold;
  color: #fff;
  outline: none;
  cursor: pointer;
  position: relative;

  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &[disabled] {
    opacity: 0.8;
    cursor: not-allowed;
  }

  ${props => (props.size ? sizes[props.size] : sizes.default)}
  ${props => (props.color ? colors[props.color] : colors.primary)}

  ${props =>
    props.isLoading &&
    css`
      color: transparent;
    `}
`;

export const ContainerLoading = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;
