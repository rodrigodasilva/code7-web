import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  color: var(--primary-text);
  line-height: 28px;

  span {
    color: var(--secondary-text);
    font-size: 18px;
  }
`;

export const Buttons = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;

  button + button {
    margin-left: 12px;
  }
`;
