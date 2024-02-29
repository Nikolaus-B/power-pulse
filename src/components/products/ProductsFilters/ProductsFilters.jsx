import React from 'react';
import { Select, Input } from '@chakra-ui/react';

export const ProductsFilters = () => {
  return (
    <>
      <Input
        placeholder="Search"
        w={335}
        variant="outline"
        borderWidth="1px"
        borderColor="rgba(239, 237, 232, 0.3)"
        borderRadius="12"
        p={14}
        bg="inherit"
      />
      <Select
        color='white'
        fontSize={14}
        w={146}
        variant="outline"
        borderWidth="1px"
        borderColor="rgba(239, 237, 232, 0.3)"
        borderRadius="12"
        p={14}
        bg="inherit"
        placeholder="Categories"
      >
        {/* categories.map */}
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Select
        fontSize={14}
        w={173}
        color='white'
        variant="outline"
        borderWidth="1px"
        borderColor="rgba(239, 237, 232, 0.3)"
        borderRadius="12"
        p={14}
        bg="inherit"
      >
        <option value="all">All</option>
        <option value="recommended">Recommended</option>
        <option value="notRecommended">Not recommended</option>
      </Select>
    </>
  );
};
