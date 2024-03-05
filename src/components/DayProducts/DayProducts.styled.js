import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductsContainer = styled.div`
  position: relative;
  height: 335px;
  padding: 16px;
  border: 1px solid var(--border-static-color);
  border-radius: 12px;

  @media screen and (min-width: 1440px) {
    width: 826px;
    height: 234px;
  }
`;

export const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
`;

export const DayProductTitle = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: var(--text-categories-color);
`;

export const ProductsLink = styled(Link)`
  text-decoration: none;

  color: var(--orange-color);
`;

export const Productslist = styled.div`
  display: block;
`;

export const NotFoundProducts = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--text-info-color);
`;
