import { Backdrop, CloseButton, Container, IconClose } from './Modal.styled';

import sprite from '../../assets/images/icons/icons.svg';

const { useEffect } = require('react');
const { createPortal } = require('react-dom');

const Modal = ({ isOpen, onClose, children }) => {
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscKeyPress = event => {
      if (isOpen && event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    window.addEventListener('keydown', handleEscKeyPress);

    return () => {
      window.removeEventListener('keydown', handleEscKeyPress);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }
  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Container id="modal-container">
        <CloseButton onClick={onClose}>
          <IconClose>
            <use xlinkHref={`${sprite}#icon-close`} width={24} height={24} />
          </IconClose>
        </CloseButton>
        {children}
      </Container>
    </Backdrop>,
    document.getElementById('modal-root')
  );
};

export default Modal;
