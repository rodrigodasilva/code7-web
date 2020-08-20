import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 72px 0px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--surface-background);
  padding: 36px;
  border-radius: 10px;
  box-shadow: 0 1px 2px var(--shadow);

  width: 100%;
  max-width: 380px;

  animation: ${appearFromRight} 1s;

  h1 {
    color: var(--primary-text);
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 24px;
    text-align: center;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
      margin-top: 18px;
      width: 100%;
    }
  }

  a {
    color: var(--primary-text);
    font-size: 16px;
    margin-top: 40px;
    display: flex;
    align-items: center;

    svg {
      margin-right: 4px;
    }
  }
`;
