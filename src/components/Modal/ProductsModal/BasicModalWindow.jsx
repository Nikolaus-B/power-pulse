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
  const [caloriesAdded, setCaloriesAdded] = useState(0);
  // const [error, setError] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleCloseSuccess = () =>{
    setIsFormVisible(!isFormVisible)
    setIsOpen(false);

  }

  const handleCloseForm = () =>{
        setIsFormVisible(!isFormVisible)
  }


  const handleAddProductSuccess = calories => {
    // POST на бек
    setCaloriesAdded(calories);
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
contentLabel="Add Product Modal"> 

{isFormVisible ? (
    <AddProductForm
      product={productData}
      onClose={handleCloseModal}
      onCloseForm = {handleCloseForm}
      onSuccess={handleAddProductSuccess}
      onError={handleAddProductError}
    />
  ) : (
    <AddProductSuccess isSuccessOpen={true} onClose={handleCloseSuccess} onCloseSuccess = {handleCloseForm} caloriesAdded={caloriesAdded} />
  )}</Modal>
     

      {/* <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
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
      )} */}
    </>
  );
};
