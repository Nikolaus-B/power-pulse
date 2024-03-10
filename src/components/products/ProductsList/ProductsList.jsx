import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { fetchProducts } from 'API/productsAPI';
import { ProductItem } from './ProductsItem';
import { NotFoundProduct } from '../NotFoundProduct/NotFoundProduct';
import { selectCategory, selectQuery, selectRecommended } from '../../../redux/products/productsSelectors';
import { List } from './ProductsList.styled';

export const ProductsList = () => {

  const query = useSelector(selectQuery);
  const category = useSelector(selectCategory);
  const recommended = useSelector(selectRecommended);
  const [products, setProducts] = useState([]);

    useEffect(() => {
      async function getProducts() {
            try {
              const products = await fetchProducts(query, category, recommended);
              setProducts(products);
            } catch (error) {
            }
          }
          getProducts();
  }, [query, category, recommended])

  return (
    <>
    <List>
    {products && products.length !== 0 ? (
        products.map(product => {
          return <ProductItem product={product} key={product._id} />;
        })
      ) : (
        <NotFoundProduct />
      )}
    </List>
    </>
  );
};