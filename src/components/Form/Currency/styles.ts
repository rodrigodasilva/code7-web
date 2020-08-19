import styled, { css } from 'styled-components';

interface ContainerProps {
  error: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;

  label {
    font-size: 14px;
    margin-bottom: 4px;
    color: var(--primary-text);
  }

  input {
    border-radius: 4px;
    border: none;
    height: 38px;
    padding: 0px 10px;
    font-size: 16px;
    color: var(--primary-text);
    background: var(--input-background);
    outline: none;

    ${props =>
      props.error &&
      css`
        box-shadow: 0px 0px 0px 2px var(--danger-color) inset;
      `}
  }
`;

export const ErrorMessage = styled.span`
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  color: var(--danger-color);
  font-size: 14px;
  margin-top: 4px;

  svg {
    margin-right: 3px;
  }
`;
