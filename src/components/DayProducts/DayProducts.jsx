import {
  ProductsContainer,
  NotFoundProducts,
  ProductsLink,
  ProductHeader,
  DayProductTitle,
  DayProductsContainer,
  RecomendedProduct,
  DayProductsMobileList,
  DayProductsMobileElement,
  MobileTitle,
  MobileValueContainer,
  MobileItemContainer,
  DeleteProductBtn,
  Table,
  TableTitle,
  TableValue,
  TableValueContainer,
  ValueContainer,
} from './DayProducts.styled';
import { Icon } from 'components/Icon/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeleteProduct } from '../../redux/diary/operations';
import { selectDiaryProducts } from '../../redux/diary/diarySelectors';

import { selectUser } from '../../redux/user/userSelectors';
import { DayProductItem } from './DayProductItem';

// const products = [];

export const DayProducts = ({ media }) => {
  const dispatch = useDispatch();

  const products = useSelector(selectDiaryProducts);
  const { blood } = useSelector(selectUser);

  const deleteProduct = id => {
    dispatch(fetchDeleteProduct(id));
  };

  return (
    <ProductsContainer>
      <ProductHeader>
        <DayProductTitle>Products</DayProductTitle>
        <ProductsLink to="/products">
          Add Product <Icon height={15} width={15} iconid={'arrow'} />
        </ProductsLink>
      </ProductHeader>
      {products.length ? (
        <>
          {media ? (
            <DayProductsContainer>
              <Table id="products">
                <thead>
                  <tr>
                    <TableTitle>Title</TableTitle>
                    <TableTitle>Category</TableTitle>
                    <TableTitle>Calories</TableTitle>
                    <TableTitle>Weight</TableTitle>
                    <TableTitle>Recommend</TableTitle>
                  </tr>
                </thead>

                <tbody>
                  {products.map((el, i) => {
                    return (
                      <tr key={el._id}>
                        <TableValueContainer className="big">
                          <ValueContainer>
                            <TableValue>{el.productId.title}</TableValue>
                          </ValueContainer>
                        </TableValueContainer>
                        <TableValueContainer className="medium">
                          <TableValue>{el.productId.category}</TableValue>
                        </TableValueContainer>
                        <TableValueContainer>
                          <TableValue>{el.calories}</TableValue>
                        </TableValueContainer>
                        <TableValueContainer>
                          <TableValue>{el.amount}</TableValue>
                        </TableValueContainer>
                        <TableValueContainer className="recomended">
                          <RecomendedProduct
                            $isRecomended={
                              el.productId.groupBloodNotAllowed[blood]
                            }
                          >
                            {el.productId.groupBloodNotAllowed[blood]
                              ? 'No'
                              : 'Yes'}
                          </RecomendedProduct>
                        </TableValueContainer>
                        <td>
                          <DeleteProductBtn
                            style={{ marginTop: '0px' }}
                            onClick={() => deleteProduct(el._id)}
                          >
                            <Icon
                              width={20}
                              height={20}
                              iconid={'trash-icon'}
                            />
                          </DeleteProductBtn>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </DayProductsContainer>
          ) : (
            <>
              <DayProductsMobileList>
                {products.map((el, i) => {
                  return (
                    <DayProductsMobileElement key={el._id}>
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
                      <MobileItemContainer>
                        <MobileTitle>Recommend</MobileTitle>
                        <MobileValueContainer>
                          <RecomendedProduct
                            $isRecomended={
                              el.productId.groupBloodNotAllowed[blood]
                            }
                          >
                            {el.productId.groupBloodNotAllowed[blood]
                              ? 'No'
                              : 'Yes'}
                          </RecomendedProduct>
                        </MobileValueContainer>
                      </MobileItemContainer>
                      <DeleteProductBtn onClick={() => deleteProduct(el._id)}>
                        <Icon width={20} height={20} iconid={'trash-icon'} />
                      </DeleteProductBtn>
                    </DayProductsMobileElement>
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
