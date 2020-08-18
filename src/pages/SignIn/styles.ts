import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 72px 0px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 380px;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--surface-background);
    padding: 36px 24px;
    border-radius: 10px;
    box-shadow: 0 1px 2px var(--shadow);

    button {
      margin-top: 18px;
      width: 100%;
    }
  }
`;
