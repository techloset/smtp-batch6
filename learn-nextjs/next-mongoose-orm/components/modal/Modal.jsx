// pages/index.js
"use client"
import React, { useState } from 'react';
import ProductModal from './ProductModal';

const Modal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (formData) => {
    // Handle the form data, e.g., send it to an API
    console.log('Form data submitted:', formData);
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>{props.title}</button>

      {isModalOpen && (
        <ProductModal product={props.product} isUpdate={props.isUpdate} title={props.title} onClose={closeModal} onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default Modal;
