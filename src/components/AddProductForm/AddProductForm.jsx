
import React, { useState } from 'react';
import { CloseIcon } from '@chakra-ui/icons';
import axios from 'axios';

import {
  CancelButton,
  AddToDiaryButton,
  ModalForm,
  ProductInput,
  GrammInput,
  Text,
  Span,
  WrapperCloseIcon,
  WrapperInputForm
} from './AddProductForm.styled';

export const AddProductForm = ({ product, onClose, onCloseForm, onSuccess, onError }) => {
  const [grams, setGrams] = useState('');
  const [calories, setCalories] = useState(0);

  const { title, calories: productCalories } = product;

  const handleGramsChange = e => {
    const gramsValue = e.target.value;

    setGrams(gramsValue.trim());
    if (!isNaN(gramsValue)) {
      const calculatedCalories = (gramsValue * productCalories) / 100;
      setCalories(calculatedCalories);
    } else {
      setCalories(0);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    e.stopPropagation();
    // try {
    //   const response = await axios.post('/api/addProductToDiary', {
    //     productID: product.id,
    //     date: new Date().toISOString(),
    //     amount: grams,
    //     calories,
    //   });

      // if (response.status === 200) {
        // Закриття модального вікна додавання продукту і відкриття вікна успішного додавання
        // onClose();
        onCloseForm()
        onSuccess(calories);
  //     } else {
  //       onError('Помилка під час додавання продукту');
  //     }
  //   } catch (error) {
  //     console.error('Помилка під час відправки запиту:', error);
  //     onError('Помилка під час відправки запиту');
  //   }
  };

  return (
    <>
      <WrapperCloseIcon onClick={onClose}>
        <CloseIcon w={11} h={11} />
      </WrapperCloseIcon>
      <ModalForm onSubmit={handleSubmit}>
        <WrapperInputForm>
          <ProductInput type="text" value={title} readOnly />
          <div>
            <GrammInput
              type="number"
              inputMode="numeric"
              value={grams}
              onChange={handleGramsChange}
            />
            <Span>grams</Span>
          </div>
        </WrapperInputForm>

        <Text>
          Calories:
          <span style={{ color: 'white', marginLeft: '4px' }}>{calories}</span>
        </Text>
          <AddToDiaryButton type="submit">
            Add to diary
          </AddToDiaryButton>
          <CancelButton type="button" onClick={onClose}>
            Cancel
          </CancelButton>
      </ModalForm>
    </>
  );
};