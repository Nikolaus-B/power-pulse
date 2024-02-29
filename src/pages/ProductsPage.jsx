import { Title } from 'components/Title/Title';
import { ProductsFilters } from 'components/products/ProductsFilters/ProductsFilters';
import { ProductsList } from 'components/products/ProductsList/ProductsList';
import React from 'react';

const products = [
  {
    "_id": {
      "$oid": "5d51694902b2373622ff5773"
    },
    "weight": 100,
    "calories": 340,
    "category": "dairy",
    "title": "Danbo cheese",
    "groupBloodNotAllowed": {
      "1": true,
      "2": true,
      "3": false,
      "4": false
    }
  },{
    "_id": {
      "$oid": "5d51694902b2373622ff5b7f"
    },
    "weight": 100,
    "calories": 112,
    "category": "fish",
    "title": "marlin",
    "groupBloodNotAllowed": {
      "1": false,
      "2": false,
      "3": false,
      "4": false
    }
  },{
    "_id": {
      "$oid": "5d51694902b2373622ff5e13"
    },
    "weight": 100,
    "calories": 17,
    "category": "vegetables and herbs",
    "title": "Salads Belaya Dacha Delicate root",
    "groupBloodNotAllowed": {
      "1": false,
      "2": false,
      "3": false,
      "4": false
    }
  }
]

function ProductPage() {
  return <div>
    <Title title='Products' />
    <ProductsFilters />
    <ProductsList />
  </div>;
}

export default ProductPage;
