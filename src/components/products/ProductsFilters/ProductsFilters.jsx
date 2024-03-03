import React from 'react';
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
import { Select } from '@chakra-ui/react'

export const ProductsFilters = ({ categories }) => {
  return (
    <Form>
      <InputWrapper>
        <Input placeholder="Search" />
        <ButtonWrapper>
          <InputButton type="button">
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
      {/* <CustomSelect> */}
      <SelectCategory defaultValue="placeholder">
        <Option value="placeholder" disabled hidden>Categories</Option>
        {categories.map(category => {
          return <Option value={category} name="category" key={category} width='100%'>
          {category}
        </Option>
        })}
        
      </SelectCategory> 
      {/* </CustomSelect> */}
      <SelectLevel defaultValue="all">
        <Option value="all">All</Option>
        <Option value="recommended">Recommended</Option>
        <Option value="notRecommended">Not recommended</Option>
      </SelectLevel>
    </Form>
  );
};
