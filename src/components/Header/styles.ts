import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;

  box-shadow: 0 1px 2px var(--shadow);
  z-index: 8;
  background: var(--surface-background);
  color: var(--primary-text);

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 58px;
`;

export const MaxWidth = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;

  @media only screen and (max-width: 900px) {
    padding: 0 30px;
  }

  @media only screen and (max-width: 460px) {
    padding: 0 18px;
  }
`;

export const Logo = styled.span`
  font-weight: bold;
  font-size: 18px;
  margin-right: 24px;
  cursor: pointer;
`;

export const Content = styled.aside`
  display: flex;
  align-items: flex-end;

  > button {
    color: var(--secondary-text);
    outline: none;
    font-weight: bold;

    font-size: 14px;

    will-change: border-color;
    border-bottom: 2px solid transparent;
    transition: border-color 0.25s ease 0s;

    &:hover {
      border-color: var(--secondary-text);
    }
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 32px;

  strong {
    font-size: 16px;
    color: var(--primary-text);
  }

  button {
    color: var(--secondary-text);
    font-size: 14px;
    outline: none;

    :hover {
      opacity: 0.8;
    }
  }
`;
