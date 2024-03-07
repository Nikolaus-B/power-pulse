import styled from 'styled-components';
import { Link } from 'react-router-dom';

const getText = props => {
  return `'${props.$keyOfProduct}'`;
};

export const ProductsContainer = styled.div`
  position: relative;

  min-height: 335px;
  max-height: 824px;
  padding: 16px 22px 16px 16px;
  border: 1px solid var(--border-static-color);
  border-radius: 12px;

  @media screen and (max-width: 767px) {
    width: 335px;
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

export const Productslist = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 39px;
  height: 752px;
  overflow-y: scroll;
`;

export const Productsli = styled.li``;

export const ProductsItemsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const ProductsItem = styled.li`
  display: block;
  height: 64px;
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

  @media screen and (max-width: 767px) {
    &::before {
      content: ${getText};
      font-size: 12px;
      line-height: 18px;
      text-transform: capitalize;

      color: var(--orange_1-color);
    }
  }

  @media screen and (min-width: 768px) {
    &.firstEl {
      &::before {
        font-size: 12px;
        line-height: 18px;
        content: ${getText};
        text-transform: capitalize;
        color: var(--orange_1-color);
      }
    }
  }
`;

export const ProductsTextContainer = styled.div`
  margin-top: 8px;
  height: 38px;
  border: 1px solid var(--text-info-color);
  border-radius: 12px;
  padding: 10px 14px;

  &.big {
  }

  &.medium {
  }

  &.small {
  }
`;

export const ProductsText = styled.p`
  text-transform: capitalize;
  font-size: 14px;
  line-height: 18px;
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
