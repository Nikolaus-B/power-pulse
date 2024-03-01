import React from 'react';
import { Form, Input, Option, SelectCategory, SelectLevel } from './ProductsFilters.styled';

export const ProductsFilters = () => {
  return (
    <Form>
      <Input placeholder="Search" />
      <SelectCategory>
        {/* categories.map */}
        <Option value="">Categories</Option>
        <Option value="category" name="category" id="category-select">
          Option 1
        </Option>

      </SelectCategory>
      <SelectLevel>
        <Option value="all">All</Option>
        <Option value="recommended">Recommended</Option>
        <Option value="notRecommended">Not recommended</Option>
      </SelectLevel>
    </Form>
  );
};
