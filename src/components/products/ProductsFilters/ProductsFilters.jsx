import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import {
  Form,
  InputWrapper,
  Input,
  ButtonWrapper,
  InputButton,
} from './ProductsFilters.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategories,
  selectCategory,
  selectIsRecommended,
  selectQuery,
} from '../../../redux/products/productsSelectors';
import { setFilterQuery, setFilterCategory, setFilterRecommended } from '../../../redux/products/productsSlice';
import { fetchCategories } from '../../../redux/products/operations';

export const ProductsFilters = ({ categories }) => {
  const recommendedFilters = ['all', 'recommended', 'not recommended'];

  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: 'inherit',
      borderRadius: '12px',
      border: '1px solid var(--text-info-color)',
      width: '100%',
      padding: '6px',
      fontSize: '14px',
      height: '50px',
      '@media screen and (min-width: 768px)': {
        fontSize: '16px',
        width: '192px',
      },
    }),
    menu: base => ({
      ...base,
      color: 'var(--white-color)',
    }),
    menuList: base => ({
      ...base,
      backgroundColor: '#1c1c1c',
      borderRadius: '12px',
      padding: '14px 32px 14px 14px',
      gap: '8px',
      maxHeight: '228px',
      overflowY: 'auto',
      '&::-webkit-scrollbar': {
        width: '6px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(239, 237, 232, 0.1)',
        borderRadius: '12px',
      },
      color: 'var(--white-color)',
    }),
    indicatorSeparator: base => ({
      ...base,
      display: 'none',
    }),
    placeholder: base => ({
      ...base,
      color: 'var(--white-color)',
    }),
    singleValue: base => ({
      ...base,
      color: 'var(--white-color)',
    }),
  };

  const capitalizeFirstLetter = text => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const clearQuery = () => {
    setQuery('')
    dispatch(setFilterQuery(''))
  }
  const dispatch = useDispatch();
  const [hiddenBtn, setHiddenBtn] = useState(false);
  //const query = useSelector(selectQuery);
  const [query, setQuery] = useState('');
  const category = useSelector(selectCategory);
  const recommended = useSelector(selectIsRecommended);

  const handleChange = (e) => {
    const { value } = e.target;
    setHiddenBtn(value.length > 0);
    setQuery(value);
    dispatch(setFilterQuery(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery('')
    setHiddenBtn(false)
  }; 


  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
        <Input
        name='query'
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleChange}
        />
        <ButtonWrapper>
          {hiddenBtn && <InputButton type="button" onClick={clearQuery}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 4.5L4.5 13.5"
                stroke="#E6533C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.5 4.5L13.5 13.5"
                stroke="#E6533C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </InputButton>}
          <InputButton type="submit">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
                stroke="#EFEDE8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.7498 15.75L12.4873 12.4875"
                stroke="#EFEDE8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </InputButton>
        </ButtonWrapper>
      </InputWrapper>
      <Select
      onChange={evt => dispatch(setFilterCategory(evt.value))}
        options={categories.map(category => ({
          value: category,
          label: capitalizeFirstLetter(category),
        }))}
        name="Categories"
        placeholder="Categories"
        styles={customStyles}
        minWidth="146px"
        theme={theme => ({
          ...theme,
          borderRadius: '12px',
        })}
      />
      <Select
      onChange={evt => dispatch(setFilterRecommended(evt.value))}
        placeholder="All"
        styles={customStyles}
        minWidth="173px"
        maxWidth="204px"
        options={recommendedFilters.map(el => ({
          value: el,
          label: capitalizeFirstLetter(el),
        }))}
        theme={theme => ({
          ...theme,
          borderRadius: '12px',
        })}
        name='recommended'
      />
    </Form>
  );
};
