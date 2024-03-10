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

  //const customStyles = {
    // control: (base, state) => ({
    //   ...base,
    //   backgroundColor: 'inherit',
    //   borderRadius: '12px',
    //   border: '1px solid var(--text-info-color)',
    //   width: '100%',
    //   padding: '6px',
    //   fontSize: '14px',
    //   height: '50px',
    //   '@media screen and (min-width: 768px)': {
    //     fontSize: '16px',
    //     width: '192px',
    //   },
    // }),
    // menu: base => ({
    //   ...base,
    //   color: 'var(--white-color)',
    // }),
    // menuList: base => ({
    //   ...base,
    //   backgroundColor: '#1c1c1c',
    //   borderRadius: '12px',
    //   padding: '14px 32px 14px 14px',
    //   gap: '8px',
    //   maxHeight: '228px',
    //   overflowY: 'auto',
    //   '&::-webkit-scrollbar': {
    //     width: '6px',
    //   },
    //   '&::-webkit-scrollbar-thumb': {
    //     backgroundColor: 'rgba(239, 237, 232, 0.1)',
    //     borderRadius: '12px',
    //   },
    //   color: 'var(--white-color)',
    // }),
    // indicatorSeparator: base => ({
    //   ...base,
    //   display: 'none',
    // }),
    // placeholder: base => ({
    //   ...base,
    //   color: 'var(--white-color)',
    // }),
    // singleValue: base => ({
    //   ...base,
    //   color: 'var(--white-color)',
    // }),

  //};

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
        theme={theme => ({
          ...theme,
          borderRadius: '12px',
        })}
      />
      <Select
        onChange={evt => dispatch(setFilterRecommended(evt.value))}
        placeholder="All"
        styles={secondSelectStyles}
        options={recommendedFilters}
        theme={theme => ({
          ...theme,
          borderRadius: '12px',
        })}
        name="recommended"
      />
    </Form>
  );
};