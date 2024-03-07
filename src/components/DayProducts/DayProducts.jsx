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

// const products = [];
const products = [
  {
    id: 'ewfwfdsds',
    title: 'rise',
    category: 'flour',
    calories: '200',
    weith: '100',
    recomended: true,
  },
  {
    id: 'ewfwfds',
    title: 'mear',
    category: 'flour',
    calories: '400',
    weith: '300',
    recomended: false,
  },
  {
    id: 'ewfwfds',
    title: 'milk',
    category: 'flour',
    calories: '100',
    weith: '50',
    recomended: true,
  },
  {
    id: 'ewfwf',
    title: 'milk',
    category: 'flour',
    calories: '100',
    weith: '50',
    recomended: false,
  },
  {
    id: 'ewfwff',
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

  const returnId = id => {
    if (id === 'id') {
      console.log(id);
      return id;
    }
  };

  return (
    <ProductsContainer>
      <ProductHeader>
        <DayProductTitle>Products</DayProductTitle>
        <ProductsLink to="/product">
          Add Product <Icon height={15} width={15} iconid={'arrow'} />
        </ProductsLink>
      </ProductHeader>
      {products.length ? (
        <Productslist>
          {products.map((el, i) => {
            return (
              <>
                <Productsli key={el.id}>
                  <ProductsItemsList>
                    {Object.entries(el).map(([key, value]) => {
                      return (
                        <ProductsItem
                          key={returnId(key)}
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
                    <button>
                      <Icon iconid={'trash-icon'} />
                    </button>
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
