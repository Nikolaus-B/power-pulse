import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Title } from 'components/Title/Title';
import { NotFoundProduct } from 'components/products/NotFoundProduct/NotFoundProduct';
import { ProductsFilters } from 'components/products/ProductsFilters/ProductsFilters';
import {
  Container,
  PageContainer,
} from 'components/products/ProductsFilters/ProductsFilters.styled';
import { ProductsList } from 'components/products/ProductsList/ProductsList';
import {
  fetchAllProducts,
  fetchCategories,
  fetchIsRecommended,
} from '../redux/products/operations';
import {
  selectCategories,
  selectVisibleProducts,
} from '../redux/products/productsSelectors';

import { GlobalStyle } from 'components/GlobalStyle';

import {BasicModalWindow} from '../components/Modal/ProductsModal/BasicModalWindow'

function ProductPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchAllProducts());
    dispatch(fetchIsRecommended());
  }, [dispatch]);

  const categories = useSelector(selectCategories);
  const filteredProducts = useSelector(selectVisibleProducts);

  return (
    <PageContainer className="container">
      <Container>
        <Title title="Products" />
        <ProductsFilters categories={categories} />
      </Container>
      {filteredProducts.length !== 0 ? (
        <ProductsList products={filteredProducts} />
      ) : (
        <NotFoundProduct />
      )}
    </PageContainer>
  );
}

export default ProductPage;