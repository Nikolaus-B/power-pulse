import React from 'react';
import {
  ProductsContainer,
  NotFoundProducts,
  Productslist,
  ProductsLink,
  ProductHeader,
  DayProductTitle,
  ProductsIcon,
  Productsli,
  ProductsItem,
  ProductsText,
  ProductsTextContainer,
  ProductsItemsList,
} from './DayProducts.styled';

// const products = [];
const products = [
  {
    title: 'rise',
    category: 'flour',
    calories: '200',
    weith: '100',
    recomended: true,
  },
  {
    title: 'mear',
    category: 'flour',
    calories: '400',
    weith: '300',
    recomended: false,
  },
  {
    title: 'milk',
    category: 'flour',
    calories: '100',
    weith: '50',
    recomended: true,
  },
  {
    title: 'milk',
    category: 'flour',
    calories: '100',
    weith: '50',
    recomended: false,
  },
  {
    title: 'milk',
    category: 'flour',
    calories: '100',
    weith: '50',
    recomended: true,
  },
];

export const DayProducts = () => {
  const defineClassNames = (key, index) => {
    const size =
      key === 'title' ? 'big' : key === 'category' ? 'medium' : 'small';

    const firstEl = index === 0 ? 'firstEl' : '';

    return `${size} ${firstEl}`;
  };

  const convertValue = value => {
    return value ? 'Yes' : 'No';
  };

  return (
    <ProductsContainer>
      <ProductHeader>
        <DayProductTitle>Products</DayProductTitle>
        <ProductsLink to="/product">
          Add Product{' '}
          <ProductsIcon icon="ri:arrow-right-line" height={16} width={16} />
        </ProductsLink>
      </ProductHeader>
      {products.length ? (
        <Productslist>
          {products.map((el, i) => {
            return (
              <>
                <Productsli>
                  <ProductsItemsList>
                    {Object.entries(el).map(([key, value]) => {
                      return (
                        <ProductsItem
                          $keyOfProduct={key}
                          className={defineClassNames(key, i)}
                        >
                          <ProductsTextContainer
                            className={defineClassNames(key, i)}
                          >
                            <ProductsText className={defineClassNames(key, i)}>
                              {key === 'recomended'
                                ? convertValue(value)
                                : value}
                            </ProductsText>
                          </ProductsTextContainer>
                        </ProductsItem>
                      );
                    })}
                  </ProductsItemsList>
                </Productsli>
              </>
            );
          })}
        </Productslist>
      ) : (
        <NotFoundProducts>Not found products</NotFoundProducts>
      )}
    </ProductsContainer>
  );
};
