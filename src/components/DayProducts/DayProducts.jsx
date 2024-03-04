import React from 'react';
import {
  ProductsContainer,
  NotFoundProducts,
  Productslist,
  ProductsLink,
  ProductHeader,
  DayProductTitle,
} from './DayProducts.styled';

export const DayProducts = () => {
  return (
    <ProductsContainer>
      <ProductHeader>
        <DayProductTitle>Products</DayProductTitle>
        <ProductsLink to="/product">Add Product</ProductsLink>
      </ProductHeader>
      <Productslist>
        <NotFoundProducts>Not found products</NotFoundProducts>
      </Productslist>
    </ProductsContainer>
  );
};
