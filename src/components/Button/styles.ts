import styled, { css } from 'styled-components';

import { ButtonProps } from './index';

const sizes = {
  small: css`
    padding: 4px 8px;
    font-size: 12px;
  `,
  default: css`
    padding: 8px 12px;
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
  secundary: css`
    background: var(--secondary-color);
    color: var(--secondary-color-contrast);
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
};

export const Container = styled.button<ButtonProps>`
  border: 0;
  border-radius: 4px;
  font-weight: bold;
  color: #fff;
  outline: none;
  cursor: pointer;

  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover {
    opacity: 0.9;
  }

  ${props => (props.size ? sizes[props.size] : sizes.default)}
  ${props => (props.color ? colors[props.color] : colors.primary)}
`;
