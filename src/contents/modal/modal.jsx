import React from 'react';
import { useGlobalContext } from './context';
import CloseIcon from '@mui/icons-material/Close';
import './modal.css';
import { ContactUs } from './form';

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <ContactUs />
        <button className='close-modal-btn' onClick={closeModal}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default Modal;
