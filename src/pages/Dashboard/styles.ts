import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 62px 44px;

  @media only screen and (max-width: 900px) {
    padding: 62px 24px;
  }

  @media only screen and (max-width: 460px) {
    padding: 62px 12px;
  }
`;

export const Filters = styled.div`
  flex: 1;
  max-width: 300px;
  min-width: 250px;
  height: max-content;

  @media only screen and (max-width: 745px) {
    max-width: 100%;
  }

  background: var(--surface-background);
  border-radius: 10px;
  box-shadow: 0 1px 2px var(--shadow);
  margin: 6px;
  padding: 20px;

  color: var(--primary-text);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;

    h5 {
      font-size: 16px;
      font-weight: bold;
    }
  }

  fieldset {
    padding: 3px 0;

    + fieldset {
      margin-top: 12px;
    }

    legend {
      font-size: 14px;
      width: auto;
      margin: 0;
    }

    input {
      font-size: 16px;
      background: var(--input-background);
      border-radius: 4px;
      padding: 10px;
      color: var(--primary-text);
      border: none;
      outline: none;
      width: 100%;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;

      & + input {
        margin-top: 6px;
      }
    }
  }

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
  .react-select__input input {
    color: var(--primary-text) !important;
  }
`;

export const DebtsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  align-items: stretch;
  justify-content: flex-start;
  height: max-content;
`;
