import React, { useState } from 'react';
import { Icon } from 'components/Icon/Icon';
import { Toaster, toast } from 'react-hot-toast';
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
import { useDispatch } from 'react-redux';
import { fetchAddProduct } from '../../redux/diary/operations';

export const AddProductForm = ({
  product,
  onClose,
  onCloseForm,
  onSuccess,
  onError,
}) => {
  const dispatch = useDispatch();
  const [grams, setGrams] = useState('');
  const [calories, setCalories] = useState(0);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const { title, calories: productCalories } = product;

  const data = {
    productId: product._id,
    date: new Date()
      .toISOString()
      .split('T', 1)[0]
      .split('-')
      .reverse()
      .join('-'),
    amount: Number(grams),
    calories: calories,
  };

  const addProduct = productData => {
    if (productData.amount === 0) {
      return;
    }
    dispatch(fetchAddProduct(productData.data));
  };

  const handleGramsChange = e => {
    const gramsValue = e.target.value;

    setGrams(gramsValue.trim());
    if (gramsValue === '' || isNaN(gramsValue) || parseFloat(gramsValue) <= 0) {
      setIsSubmitDisabled(true);
      setCalories(0);
    } else {
      setIsSubmitDisabled(false);
      setGrams(gramsValue);
      const calculatedCalories = (parseFloat(gramsValue) * productCalories) / 100;
      setCalories(calculatedCalories);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    e.stopPropagation();
    toast.success('Product added to diary!')
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
        <AddToDiaryButton type="submit" disabled={isSubmitDisabled} onClick={() => addProduct({ data })}>
          Add to diary
        </AddToDiaryButton>
        <CancelButton type="button" onClick={onClose}>
          Cancel
        </CancelButton>
      </ModalForm>
      <Toaster
        toastOptions={{
          duration: 5000,
          style: {
            background: '#321f0c',
            color: '#fff',
          },
          success: {
            duration: 3000,
            style: {
              border: '2px solid #3CBF61',
            },
          },
          error: {
            duration: 4000,
            style: {
              border: '2px solid #D80027',
            },
          },
          loading: {
            duration: 2000,
            style: {
              border: '2px solid #e6533c',
            },
          },
        }}
      />
    </>
  );
};
