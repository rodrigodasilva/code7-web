import styled from 'styled-components';

export const Container = styled.section`
  background: var(--surface-background);
  border-radius: 10px;
  box-shadow: 0 1px 2px var(--shadow);
  margin: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  min-width: 260px;
`;

export const Client = styled.header`
  display: flex;
  flex-direction: column;

  strong {
    color: var(--primary-text);
    font-size: 16px;
    margin-bottom: 4px;
  }

  span {
    color: var(--secondary-text);
    font-size: 14px;
    margin-bottom: 3px;
    max-width: max-content;

    display: flex;
    align-items: center;

    svg {
      margin-right: 4px;
    }
  }
`;

export const Debt = styled.section`
  margin: 16px 0;
  display: flex;
  flex-direction: column;

  strong {
    color: var(--primary-text);
    font-size: 16px;
    margin-bottom: 3px;
  }

  span {
    color: var(--secondary-text);
    font-size: 14px;
    margin-bottom: 3px;
  }

  p {
    word-break: break-word;
    font-size: 16px;
    color: var(--secondary-text);
    margin-bottom: 4px;
  }
`;

export const Buttons = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;

  button + button {
    margin-left: 12px;
  }
`;
