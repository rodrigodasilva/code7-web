import styled, { css } from 'styled-components';
import ReactSelect from 'react-select';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;

  label {
    font-size: 14px;
    margin-bottom: 4px;
  }
`;

export const Select = styled(ReactSelect)`
  .react-select__control {
    margin-bottom: 10px;
    background: var(--input-background);
    border: none;
    color: var(--primary-text);

    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: none;
    margin: 0;
    font-size: 16px;
    height: 38px;

    ${props =>
      props.error &&
      css`
        box-shadow: 0px 0px 0px 2px var(--danger-color) inset;
      `}
  }
  .react-select__control--is-focused {
    border-color: transparent !important;
    box-shadow: none;
  }
  .react-select__indicator-separator {
    background: #252131;
  }
  .react-select__menu {
    background: var(--input-background);
  }
  .react-select__menu-list {
    border-radius: 4px;
    max-height: 220px !important;
  }

  .react-select__option {
    background: var(--input-background);
    font-size: 16px;
    padding: 10px 15px;

    &:active {
      background: var(--gray-4);
    }
  }
  .react-select__option--is-focused {
    background: var(--gray-4);
  }
  .react-select__multi-value {
    background: var(--gray-4);
    color: var(--primary-text);
  }
  .react-select__single-value {
    color: var(--primary-text);
  }
  .react-select__multi-value__label {
    color: var(--primary-text);
    font-family: Roboto;
    font-weight: bold;
    font-size: 10px;
    text-transform: uppercase;
  }
  .react-select__multi-value__remove {
    color: var(--primary-text);
    &:hover {
      color: var(--primary-text);
      background: ${shade(0.1, '#252131')};
    }
  }
  .react-select__input input {
    color: var(--primary-text) !important;
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
