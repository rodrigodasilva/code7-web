import styled from 'styled-components';

interface FullScreenProps {
  isOpen: boolean;
}

export const FullScreen = styled.div<FullScreenProps>`
  display: ${p => (p.isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000b3;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  cursor: pointer;
  animation: fadeIn 380ms ease-in-out 1;

  @keyframes fadeIn {
    from {
      background-color: #242424;
      opacity: 0;
    }
    to {
      background-color: #000000cc;
      opacity: 1;
    }
  }
`;

export const ModalContainer = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 20px;
  min-height: 150px;
  background-color: var(--surface-background);
  overflow: hidden;
  border-radius: 4px;
  position: relative;
  cursor: default;
  animation: slideIn 350ms cubic-bezier(0.42, 0, 0.21, 1) 1;

  @keyframes slideIn {
    from {
      transform: translateY(-120px);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  header {
    margin-bottom: 18px;

    h3 {
      font-size: 22px;
      font-weight: bold;
      color: var(--primary-text);
    }
  }
`;
