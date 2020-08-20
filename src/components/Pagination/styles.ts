import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  margin: 20px;

  display: flex;
  justify-content: space-between;

  button {
    color: var(--primary-color-lighten);
    outline: none;
    margin: 0 4px;
    font-size: 16px;

    padding-bottom: 0.1rem;
    will-change: border-color;
    border-bottom: 2px solid transparent;
    transition: border-color 0.25s ease 0s;

    &:hover {
      border-color: var(--primary-color-lighten);
    }

    &:disabled {
      cursor: initial;
      opacity: 0;
    }
  }

  span {
    color: var(--secondary-text);
    font-size: 16px;
  }
`;
