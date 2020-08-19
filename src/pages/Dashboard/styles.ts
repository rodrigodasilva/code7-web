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

export const DebtsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  align-items: stretch;
  justify-content: flex-start;
  height: max-content;
`;

export const Message = styled.p`
  text-align: center;
  color: var(--secondary-text);
  width: 100%;
  min-width: 250px;
  font-size: 16px;
  margin-top: 24px;
`;
