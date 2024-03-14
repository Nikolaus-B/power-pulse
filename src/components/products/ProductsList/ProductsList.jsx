import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { fetchProducts } from 'API/productsAPI';
import { ProductItem } from './ProductsItem';
import { NotFoundProduct } from '../NotFoundProduct/NotFoundProduct';
import { Loader } from '../../Loader/Loader';
import {
  selectCategory,
  selectQuery,
  selectRecommended,
} from '../../../redux/products/productsSelectors';
import { List } from './ProductsList.styled';

export const ProductsList = () => {
  const query = useSelector(selectQuery);
  const category = useSelector(selectCategory);
  const recommended = useSelector(selectRecommended);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const products = await fetchProducts(query, category, recommended);
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, [query, category, recommended]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : products && products.length !== 0 ? (
        <List>
          {products.map(product => {
            return <ProductItem product={product} key={product._id} />;
          })}
        </List>
      ) : (
        <NotFoundProduct />
      )}
    </>
  );
};
