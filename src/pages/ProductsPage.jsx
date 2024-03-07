import { Title } from 'components/Title/Title';
import { NotFoundProduct } from 'components/products/NotFoundProduct/NotFoundProduct';
import { ProductsFilters } from 'components/products/ProductsFilters/ProductsFilters';
import { Container, PageContainer } from 'components/products/ProductsFilters/ProductsFilters.styled';
import { ProductsList } from 'components/products/ProductsList/ProductsList';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts, fetchCategories } from '../redux/products/operations';
import { selectCategories, selectProducts } from '../redux/products/productsSelectors';

function ProductPage() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const categories = useSelector(selectCategories);
  const products = useSelector(selectProducts);

  return <PageContainer className='container'>
    <Container>
    <Title title='Products' />
    <ProductsFilters categories={categories} />
    </Container>
    {products.length !== 0 ? <ProductsList products={products} /> : <NotFoundProduct />}
  </PageContainer>;
}

export default ProductPage;
