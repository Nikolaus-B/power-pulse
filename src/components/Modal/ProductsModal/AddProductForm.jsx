import React, { useState } from 'react';
import { CloseIcon } from '@chakra-ui/icons';

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

export const AddProductForm = ({ product, onClose, onSuccess, onError }) => {
  const [grams, setGrams] = useState('');
  const [call, setCalor] = useState(0);
  // const { calories: productCalories } = product;

  const { calories, title } = product;

  const handleGramsChange = e => {
    const gramsValue = e.target.value;

    setGrams(gramsValue.trim());
    if (gramsValue === '' || gramsValue)
      setCalor((gramsValue * calories) / 100);

    if (!isNaN(gramsValue)) {
      setCalor((gramsValue * calories) / 100);
    } else {
      setCalor(0);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // отправка запроса
    // onClose();
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
          <span style={{ color: 'white', marginLeft: '4px' }}>{call}</span>
        </Text>

        <div>
          <AddToDiaryButton type="submit" onClick={() => onSuccess(call)}>
            Add to diary
          </AddToDiaryButton>
          <CancelButton type="button" onClick={onClose}>
            Cancel
          </CancelButton>
        </div>
      </ModalForm>
    </>
  );
};
