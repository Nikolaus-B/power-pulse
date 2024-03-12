import React, { useState } from 'react';
import { Icon } from 'components/Icon/Icon';
import {
  CancelButton,
  AddToDiaryButton,
  ModalForm,
  ProductInput,
  GrammInput,
  Text,
  Span,
  WrapperCloseIcon,
  WrapperInputForm,
} from './AddProductForm.styled';

export const AddProductForm = ({
  product,
  onClose,
  onCloseForm,
  onSuccess,
  onError,
}) => {
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

    onCloseForm();
    onSuccess(calories);
  };

  return (
    <>
      <WrapperCloseIcon onClick={onClose}>
        <Icon width='22px' height='22px' iconid='x-white'/>
      </WrapperCloseIcon>
      <ModalForm onSubmit={handleSubmit}>
        <WrapperInputForm>
          <ProductInput type="text" value={title} readOnly />
          <div>
            <GrammInput
              type="number"
              inputMode="numeric"
              placeholder='0'
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
        <AddToDiaryButton type="submit">Add to diary</AddToDiaryButton>
        <CancelButton type="button" onClick={onClose}>
          Cancel
        </CancelButton>
      </ModalForm>
    </>
  );
};
