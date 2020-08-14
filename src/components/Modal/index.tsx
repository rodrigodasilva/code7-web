import React, { useEffect, useCallback, useRef } from 'react';

import { FullScreen, ModalContainer } from './styles';

export interface IModalProps {
  isOpen: boolean;
  title: string;
  onClose(): void;
}

const Modal: React.FC<IModalProps> = ({ isOpen, title, children, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleEscKeyUp = useCallback(
    e => {
      if (e.keyCode === 27) {
        e.preventDefault();
        onClose();
      }
    },
    [onClose],
  );

  const handleOutsideClick = useCallback(
    e => {
      if (modalRef?.current?.parentNode === e.target) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    window.addEventListener('keyup', handleEscKeyUp);
    document.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('keyup', handleEscKeyUp);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [handleEscKeyUp, handleOutsideClick, isOpen]);

  return (
    <FullScreen isOpen={!!isOpen}>
      <ModalContainer ref={modalRef}>
        <header>
          <h3>{title}</h3>
        </header>

        {children}
      </ModalContainer>
    </FullScreen>
  );
};

export default Modal;
