import React from 'react';
import {
  ProductsContainer,
  NotFoundProducts,
  Productslist,
  ProductsLink,
  ProductHeader,
  DayProductTitle,
  ProductsIcon,
} from './DayProducts.styled';

export const DayProducts = () => {
  return (
    <ProductsContainer>
      <ProductHeader>
        <DayProductTitle>Products</DayProductTitle>
        <ProductsLink to="/product">
          Add Product{' '}
          <ProductsIcon icon="ri:arrow-right-line" height={16} width={16} />
        </ProductsLink>
      </ProductHeader>
      <Productslist>
        <NotFoundProducts>Not found products</NotFoundProducts>
      </Productslist>
    </ProductsContainer>
  );
};
