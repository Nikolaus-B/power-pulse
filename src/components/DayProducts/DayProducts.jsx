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
  Productstext,
} from './DayProducts.styled';

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
      <Productslist>
        {products.length ? (
          <ul>
            {products.map((el, i) => {
              return (
                <>
                  <Productsli>
                    <ul>
                      {Object.entries(el).map(([key, value]) => {
                        return (
                          <Productstext
                            $keyOfProduct={key}
                            className={defineClassNames(key, i)}
                          >
                            <p>
                              {key === 'recomended'
                                ? convertValue(value)
                                : value}
                            </p>
                          </Productstext>
                        );
                      })}
                    </ul>
                  </Productsli>
                </>
              );
            })}
          </ul>
        ) : (
          <NotFoundProducts>Not found products</NotFoundProducts>
        )}
      </Productslist>
    </ProductsContainer>
  );
};
