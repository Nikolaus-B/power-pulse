import { ProductItem } from './ProductsItem';
import {
  List,
} from './ProductsList.styled';

export const ProductsList = ({ products }) => {
  return (
    <List>
      {products.map((product) => {
        return (
          <ProductItem  product={product} key={product._id} />
        );
      })}
    </List>
  );
};
