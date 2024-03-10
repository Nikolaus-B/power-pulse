import React from 'react';
import {
  MobileItemContainer,
  MobileTitle,
  MobileValue,
  MobileValueContainer,
} from './DayProducts.styled';

export const DayProductItem = ({ title, value }) => {
  const defineClassName = title => {
    const size =
      title === 'Title' ? 'big' : title === 'Category' ? 'medium' : 'small';
    return `${size}`;
  };

  return (
    <MobileItemContainer>
      <MobileTitle>{title}</MobileTitle>
      <MobileValueContainer className={defineClassName(title)}>
        <MobileValue>{value}</MobileValue>
      </MobileValueContainer>
    </MobileItemContainer>
  );
};
