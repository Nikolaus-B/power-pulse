import styled from 'styled-components';
import { Link } from 'react-router-dom';

const getRecomended = props => (props.$isRecomended ? '#E9101D' : '#419B09');

export const ProductsContainer = styled.div`
  position: relative;
  min-height: 335px;
  max-height: 824px;
  padding: 16px 12px 16px 16px;
  border: 1px solid var(--border-static-color);
  border-radius: 12px;

  @media screen and (max-width: 767px) {
    width: 335px;
    min-height: 234px;
    max-height: 235px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    min-height: 234px;
  }

  @media screen and (min-width: 1440px) {
    width: 826px;
    height: 234px;
  }
`;

export const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  margin-right: 4px;
`;

export const DayProductTitle = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: var(--text-categories-color);
`;

export const ProductsLink = styled(Link)`
  text-decoration: none;
  color: var(--orange-color);

  transition: color var(--transition-dur-and-func);
  &:hover,
  &:focus {
    color: var(--orange_1-color);
  }
`;

export const TitlesContainer = styled.div`
  display: flex;
`;

//* Mobile *//
export const DayProductsMobileList = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  gap: 40px;

  height: 752px;
  overflow-y: scroll;

  &::-webkit-scrollbar-thumb {
    background-color: red;
    border-radius: 6px;
  }
`;

export const DayProductsMobileElement = styled.li`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 12px;
`;

export const MobileItemContainer = styled.div``;

export const MobileTitle = styled.p`
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 8px;
  color: var(--orange_1-color);
`;

export const MobileValueContainer = styled.div`
  display: block;
  height: 38px;
  padding: 10px 14px;
  border: 1px solid var(--text-info-color);
  border-radius: 12px;

  &.big {
    width: 295px;
    color: red;
  }

  &.medium {
    width: 295px;
    color: aquamarine;
  }

  &.small {
    width: 81px;
    color: blue;
  }
`;

export const MobileValue = styled.p`
  font-size: 14px;
  line-height: 18px;
  text-transform: capitalize;
`;

export const DeleteProductBtn = styled.button`
  width: 20px;
  height: 20px;
  margin-top: 34px;
  padding: 0px;

  background-color: transparent;
  border: none;
`;

export const RecomendedProduct = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  font-size: 14px;
  line-height: 18px;
  &::before {
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 10px;
    background-color: ${getRecomended};
  }
`;

//* Desctop *//

export const DayProductsContainer = styled.div`
  height: 172px;
  overflow-y: scroll;
`;

export const Table = styled.table`
  width: 672px;
  border-spacing: 8px;
`;

export const TableTitle = styled.th`
  text-align: left;
  font-size: 12px;
  line-height: 18px;

  color: var(--orange_1-color);
`;

export const TR = styled.tr``;

export const TableValueContainer = styled.td`
  width: 90px;
  height: 40px;
  padding: 8px 14px;
  border: 1px solid var(--text-info-color);
  border-radius: 12px;
  overflow: hidden;
`;

export const ValueContainer = styled.div`
  width: 176px;

  overflow: hidden;
`;

export const TableValue = styled.p`
  font-size: 12px;
  line-height: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

//* Not Found *//

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
