import React from 'react';
import {
  ProductsContainer,
  NotFoundProducts,
  ProductsLink,
  ProductHeader,
  DayProductTitle,
  DayProductsContainer,
  El,
  DayProductsMobileList,
} from './DayProducts.styled';
import { Icon } from 'components/Icon/Icon';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchDeleteProduct } from '../../redux/diary/operations';
import { selectDiaryProducts } from '../../redux/diary/diarySelectors';
import { useMedia } from 'use-media';
import { selectUser } from '../../redux/user/userSelectors';
import { DayProductItem } from './DayProductItem';

// const products = [];

export const DayProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectDiaryProducts);
  const { blood } = useSelector(selectUser);
  const isWide = useMedia({ minWidth: '767px' });

  // const deleteProduct = id => {
  //   dispatch(fetchDeleteProduct(id));
  // };
  return (
    <ProductsContainer>
      <ProductHeader>
        <DayProductTitle>Products</DayProductTitle>
        <ProductsLink to="/product">
          Add Product <Icon height={15} width={15} iconid={'arrow'} />
        </ProductsLink>
      </ProductHeader>
      {products ? (
        <>
          {isWide ? (
            <DayProductsContainer>
              <table id="customers">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Calories</th>
                    <th>Weight</th>
                    <th>Recommend</th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((el, i) => {
                    return (
                      <tr key={el._id}>
                        <td>{el.productId.title}</td>
                        <td>{el.productId.category}</td>
                        <td>{el.calories}</td>
                        <td>{el.amount}</td>
                        <td>
                          <El
                            $isRecomended={
                              el.productId.groupBloodNotAllowed[blood]
                            }
                          >
                            {el.productId.groupBloodNotAllowed[blood]
                              ? 'No'
                              : 'Yes'}
                          </El>
                        </td>
                        <td>
                          <button>
                            <Icon
                              width={20}
                              height={20}
                              iconid={'trash-icon'}
                            />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </DayProductsContainer>
          ) : (
            <>
              <DayProductsMobileList>
                {products.map((el, i) => {
                  return (
                    <li key={el._id}>
                      <DayProductItem
                        title={'Title'}
                        value={el.productId.title}
                      />
                      <DayProductItem
                        title={'Category'}
                        value={el.productId.category}
                      />
                      <DayProductItem title={'Calories'} value={el.calories} />
                      <DayProductItem title={'Weight'} value={el.amount} />
                      <p>Recommend</p>
                      <div>
                        <El
                          $isRecomended={
                            el.productId.groupBloodNotAllowed[blood]
                          }
                        >
                          {el.productId.groupBloodNotAllowed[blood]
                            ? 'No'
                            : 'Yes'}
                        </El>
                      </div>
                      <button>
                        <Icon width={20} height={20} iconid={'trash-icon'} />
                      </button>
                    </li>
                  );
                })}
              </DayProductsMobileList>
            </>
          )}
        </>
      ) : (
        <NotFoundProducts>Not found products</NotFoundProducts>
      )}
    </ProductsContainer>
  );
};
