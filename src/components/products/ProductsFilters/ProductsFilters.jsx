import React from 'react';
import Select from 'react-select';
import {
  Form,
  InputWrapper,
  Input,
  ButtonWrapper,
  InputButton,
  Option,
  SelectCategory,
  SelectLevel,
  CustomSelect,
  ChakraSelect
} from './ProductsFilters.styled';

export const ProductsFilters = ({ categories }) => {

  const customStyles = {
    control: (provided) => ({
      ...provided,
      fontSize: '14px',
      border: '1px solid var(--text-info-color)',
      borderRadius: '12px',
      padding: '14px',
      width: '146px',
      backgroundColor: 'transparent',
      color: 'var(--white-color)',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      appearance: 'none',
      backgroundImage: 'url("data:image/svg+xml,...")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 14px center',
      '@media screen and (min-width: 768px)': {
        fontSize: '16px',
        width: '192px',
      },
    }),
    menu: (provided) => ({
      ...provided,
      maxHeight: '200px', // Set the maximum height for the dropdown
    }),
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
      options={categories.map((category) => ({ value: category, label: category }))}
      styles={customStyles} // Apply custom styles
      placeholder="Select a category"
    />
      {/* <CustomSelect>
      <SelectCategory defaultValue="placeholder">
        <Option value="placeholder" disabled hidden>Categories</Option>
        {categories.map(category => {
          return <Option value={category} name="category" key={category} width='100%'>
          {category}
        </Option>
        })}
        
      </SelectCategory> 
      </CustomSelect> */}

      {/* <Select variant="outline" placeholder="Categories">
      {categories.map(category => {
          return <option value={category} name="category" key={category}>
          {category}
        </option>
        })}
      </Select> */}
      <SelectLevel defaultValue="all">
        <Option value="all">All</Option>
        <Option value="recommended">Recommended</Option>
        <Option value="notRecommended">Not recommended</Option>
      </SelectLevel>
    </Form>
  );
};
