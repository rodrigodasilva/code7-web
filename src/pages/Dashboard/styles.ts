import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
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
      font-size: 14px;
      background: var(--input-background);
      border-radius: 8px;
      padding: 10px;
      color: var(--primary-text);
      border: none;
      outline: none;
      width: 100%;

      & + input {
        margin-top: 6px;
      }
    }
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
