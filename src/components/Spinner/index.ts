import styled from 'styled-components';

interface Props {
  size: number;
}

export const Spinner = styled.span<Props>`
  display: inline-block;
  border: 3px solid var(--primary-color-contrast);
  border-left-color: var(--primary-color-lighten);
  border-radius: 50%;
  width: ${props => props.size || 30}px;
  height: ${props => props.size || 30}px;
  animation: donutSpin 1.2s linear infinite;

  @keyframes donutSpin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
