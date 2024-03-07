import React, { useState } from 'react';
import Modal from 'react-modal';
import { customStyles } from '../../AddProductForm/AddProductForm.styled';
import { AddProductForm } from '../../AddProductForm/AddProductForm';
import { AddProductSuccess } from '../../AddProductSuccess/AddProductSuccess';

const productData = {
  _id: { $oid: '5d51694902b2373622ff5773' },
  weight: 100,
  calories: 340,
  category: 'dairy',
  title: 'Danbo cheese',
  groupBloodNotAllowed: { 1: true, 2: true, 3: false, 4: false },
};

Modal.setAppElement('#root');

export const BasicModalWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  // const [isAddProduct , setIsAddProduct]  =useState(true)
  const [caloriesAdded, setCaloriesAdded] = useState(0);
  // const [error, setError] = useState(null);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setIsSuccess(false);
  };

  const handleAddProductSuccess = calories => {
    // POST на бек
    setIsSuccess(true);
    setCaloriesAdded(calories);
    setIsOpen(false);
  };

  const handleAddProductError = errorMessage => {
    // setError(errorMessage);
  };

  return (
    <>
      <button onClick={handleOpenModal}>ADD PRODUCT</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Add Product Modal"
      >

        <AddProductForm
          product={productData}
          onClose={handleCloseModal}
          onSuccess={handleAddProductSuccess}
          onError={handleAddProductError}
        />
      </Modal>
      {isSuccess && (
        <AddProductSuccess
          isSuccessOpen={true}
          onClose={() => setIsSuccess(false)}
          caloriesAdded={caloriesAdded}
        />
      )}
    </>
  );
};
