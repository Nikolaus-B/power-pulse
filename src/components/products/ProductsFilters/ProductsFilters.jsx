import React from 'react';
import Select from 'react-select';
import {
  Form,
  InputWrapper,
  Input,
  ButtonWrapper,
  InputButton,
  Option,
  SelectLevel,
} from './ProductsFilters.styled';

export const ProductsFilters = ({ categories }) => {

  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: 'inherit',
      borderRadius: '12px',
      border: '1px solid var(--text-info-color)',
      width: '146px',
      padding: '6px 0px 6px 6px',
      fontSize: '14px',
      height: '50px',
      '@media screen and (min-width: 768px)': {
        fontSize: '16px',
        width: '192px',
      },
    }),
    menu: (base) => ({
      ...base,
      color: 'var(--white-color)',
    }),
    menuList: (base) => ({
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
    indicatorSeparator: (base) => ({
      ...base,
      display: 'none',
    }),
    placeholder: (base) => ({
      ...base,
      color: 'var(--white-color)',
    }),
    singleValue: (base) => ({
      ...base,
      color: 'var(--white-color)',
    }),
    
  };

  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };


  return (
    <Form>
      <InputWrapper>
        <Input placeholder="Search" />
        <ButtonWrapper>
          <InputButton type="button" style={{display: 'none'}}>
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
          </InputButton>
          <InputButton type="button">
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
      options={categories.map((category) => ({ value: category, label: capitalizeFirstLetter(category) }))}
      styles={customStyles} // Apply custom styles
      placeholder="Select a category"
      theme={(theme) => ({
        ...theme,
        borderRadius: '12px',
      })}
    />
      <SelectLevel defaultValue="all">
        <Option value="all">All</Option>
        <Option value="recommended">Recommended</Option>
        <Option value="notRecommended">Not recommended</Option>
      </SelectLevel>
    </Form>
  );
};
