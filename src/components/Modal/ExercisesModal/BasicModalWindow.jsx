import React, { useState } from 'react';
import Modal from 'react-modal';

import { customStyles } from './ExerciseModal.styled';

import { AddExerciseForm } from './AddExerciseForm';
import { AddExerciseSuccess } from './AddExerciseSuccess';

const exerciseData = {
  _id: {
    $oid: '64f2458d6f67bc34bae4f801',
  },
  bodyPart: 'upper ',
  equipment: 'leverage ',
  gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0019.gif',
  name: 'air bike',
  target: 'triceps',
  burnedCalories: 233,
  time: 3,
};

Modal.setAppElement('#root');

export const BasicModalWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [caloriesAdded, setCaloriesAdded] = useState(0);
  // const [error, setError] = useState(null);

  // const handleOpenModal = () => {
  //   setIsOpen(true);
  // };

  const handleCloseModal = () => {
    setIsOpen(false);
    setIsSuccess(false);
  };

  const handleAddProductSuccess = () => {
    // POST на бек
    setIsSuccess(true);
    // setCaloriesAdded(calories);
    setIsOpen(false);
  };

  const handleAddProductError = errorMessage => {
    // Тостер с ошибкой , предложить повторную попытку
    // setError(errorMessage);
  };

  const handleAddCalories = (calories) => {
    setCaloriesAdded(calories)
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Add Product Modal"
      >
        <AddExerciseForm
          exerciseData={exerciseData}
          onClose={handleCloseModal}
          onSuccess={handleAddProductSuccess}
          onError={handleAddProductError}
          caloriesAdded={handleAddCalories}
        />
      </Modal>
      {isSuccess && (
        <AddExerciseSuccess
          isSuccessOpen={true}
          onClose={() => setIsSuccess(false)}
          caloriesAdded={caloriesAdded}
        />
      )}
    </>
  );
};
