import React from 'react';
import { Wrapper, Text, AccentText } from './NotFoundProduct.styled';

export const NotFoundProduct = () => {
  return (
    <Wrapper>
      <Text>
        <AccentText>Sorry, no results were found </AccentText>for the product filters you
        selected. You may want to consider other search options to find the
        product you want. Our range is wide and you have the opportunity to find
        more options that suit your needs.
        <br />
        <br />
      <AccentText>Try changing the search parameters.</AccentText>
      </Text>
    </Wrapper>
  );
};
