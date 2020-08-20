import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    font-size: 72px;
    line-height: 74px;
    text-align: center;
    font-weight: bold;
    color: var(--primary-text);
  }

  h2 {
    color: var(--secondary-text);
    font-size: 24px;
  }

  a {
    color: var(--secondary-text);
    font-size: 18px;
    margin: 20px auto;

    padding-bottom: 0.1rem;
    will-change: border-color;
    border-bottom: 2px solid transparent;
    transition: border-color 0.25s ease 0s;

    &:hover {
      border-color: var(--secondary-text);
    }
  }
`;
