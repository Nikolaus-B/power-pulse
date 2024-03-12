import React from 'react';

import { Title } from 'components/Title/Title';
import { ProductsFilters } from 'components/products/ProductsFilters/ProductsFilters';
import {
  Container,
  PageContainer,
} from 'components/products/ProductsFilters/ProductsFilters.styled';
import { ProductsList } from 'components/products/ProductsList/ProductsList';

function ProductPage() {

  return (
    <PageContainer className="container">
      <Container>
        <Title title="Products" />
        <ProductsFilters />
      </Container>
        <ProductsList />
    </PageContainer>
  );
}

export default ProductPage;