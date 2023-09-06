import { Overlay, ModalWrap } from './Modal.styled';

export const Modal = ({ largeImageURL, closeModal }) => {
  return (
    <Overlay onClick={closeModal}>
      <ModalWrap>
        <img src={largeImageURL} alt={largeImageURL} />
      </ModalWrap>
    </Overlay>
  );
};
