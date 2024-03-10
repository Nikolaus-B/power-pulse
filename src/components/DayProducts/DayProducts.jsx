import React from 'react';
import {
  ProductsContainer,
  NotFoundProducts,
  Productslist,
  ProductsLink,
  ProductHeader,
  DayProductTitle,
  Productsli,
  ProductsItem,
  ProductsText,
  ProductsTextContainer,
  ProductsItemsList,
} from './DayProducts.styled';
import { Icon } from 'components/Icon/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeleteProduct } from '../../redux/diary/operations';
import { selectDiaryProducts } from '../../redux/diary/diarySelectors';

// const products = [];

export const DayProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectDiaryProducts);

  // const defineClassNames = (key, index) => {
  //   const size =
  //     key === 'title' ? 'big' : key === 'category' ? 'medium' : 'small';

  //   const firstEl = index === 0 ? 'firstEl' : '';

  //   return `${size} ${firstEl}`;
  // };

  // const convertValue = value => {
  //   return value ? 'Yes' : 'No';
  // };

  // const returnId = id => {
  //   if (id === 'id') {
  //     console.log(id);
  //     return id;
  //   }
  // };

  const deleteProduct = id => {
    dispatch(fetchDeleteProduct(id));
  };
  return (
    <ProductsContainer>
      <ProductHeader>
        <DayProductTitle>Products</DayProductTitle>
        <ProductsLink to="/product">
          Add Product <Icon height={15} width={15} iconid={'arrow'} />
        </ProductsLink>
      </ProductHeader>
      {products ? (
        <div></div>
      ) : (
        <NotFoundProducts>Not found products</NotFoundProducts>
      )}
    </ProductsContainer>
  );
};
