import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import {
  Form,
  InputWrapper,
  Input,
  ButtonWrapper,
  InputButton,
} from './ProductsFilters.styled';
import {
  setFilterQuery,
  setFilterCategory,
  setFilterRecommended,
} from '../../../redux/products/productsSlice';
import { Icon } from 'components/Icon/Icon';
import { fetchCategories } from '../../../redux/products/operations';
import { selectCategories } from '../../../redux/products/productsSelectors';
import { firstSelectStyles, secondSelectStyles } from './selectCustomStyles';

export const ProductsFilters = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categories = useSelector(selectCategories);
  
  const capitalizeFirstLetter = text => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const recommendedFilters = [
    { value: 'all', label: 'All' },
    { value: 'true', label: 'Recommended ' },
    { value: 'false', label: 'Not recommended' },
  ];

  const categoriesList = [
    { value: 'all', label: 'All categories' },
    ...categories.map(category => ({
      value: category,
      label: capitalizeFirstLetter(category),
    })),
  ];

  const clearQuery = () => {
    setQuery('');
    dispatch(setFilterQuery(''));
    setHiddenBtn(false);
  };
  const [hiddenBtn, setHiddenBtn] = useState(false);
  const [query, setQuery] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setHiddenBtn(value.length > 0);
    setQuery(value);
    dispatch(setFilterQuery(value));
  };

  const handleSubmit = e => {
    const value = e.target.query.value;
    e.preventDefault();
    setHiddenBtn(value.length > 0);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
        <Input
          name="query"
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleChange}
        />
        <ButtonWrapper>
          {hiddenBtn && (
            <InputButton type="button" onClick={clearQuery}>
              <Icon iconid={'x-red'} width={18} height={18} />
            </InputButton>
          )}
          <InputButton type="submit">
            <Icon iconid={'search'} width={18} height={18} />
          </InputButton>
        </ButtonWrapper>
      </InputWrapper>
      <Select
        onChange={evt => dispatch(setFilterCategory(evt.value))}
        options={categoriesList}
        name="Categories"
        placeholder="Categories"
        styles={firstSelectStyles}
        theme={(theme) => ({
          ...theme,
          borderRadius: '12px',
          colors: {
            ...theme.colors,
            primary50: 'rgba(239, 237, 232, 0.1)',
            primary: 'var(--orange-color)',
          },
        })}
      />
      <Select
        onChange={evt => dispatch(setFilterRecommended(evt.value))}
        placeholder="All"
        styles={secondSelectStyles}
        options={recommendedFilters}
        theme={(theme) => ({
          ...theme,
          borderRadius: '12px',
          colors: {
            ...theme.colors,
            primary50: 'rgba(239, 237, 232, 0.1)',
            primary: 'var(--orange-color)',
          },
        })}
        name="recommended"
      />
    </Form>
  );
};