// import * as basicLightbox from 'basiclightbox';

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);

// instance.show();

// export const Modal = () => {
//   return (
//     <div class="overlay">
//       <div class="modal">
//         <img src="" alt="" />
//       </div>
//     </div>
//   );
// };

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const [modalIsOpen, setIsOpen] = React.useState(false);

export const Modal = () => {
  return (
    <div class="overlay">
      <div
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <img src="" alt="" />
      </div>
    </div>
  );
};
