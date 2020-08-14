import styled, { css } from 'styled-components';

interface IContainerProps {
  error: boolean;
}

export const Container = styled.div<IContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;

  label {
    font-size: 14px;
    margin-bottom: 4px;
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
        box-shadow: 0px 0px 0px 2px var(--danger-color-lighten) inset;
      `}
  }
`;

export const ErrorMessage = styled.span`
  width: 100%;
  text-align: left;
  color: var(--danger-color-lighten);
  font-size: 14px;
  margin-top: 4px;
`;
