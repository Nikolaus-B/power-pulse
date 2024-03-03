import { Title } from 'components/Title/Title';
import { NotFoundProduct } from 'components/products/NotFoundProduct/NotFoundProduct';
import { ProductsFilters } from 'components/products/ProductsFilters/ProductsFilters';
import { Container, PageContainer } from 'components/products/ProductsFilters/ProductsFilters.styled';
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
  },{
    "_id": {
      "$oid": "5d51694902b2373622ff5b6f"
    },
    "weight": 100,
    "calories": 160,
    "category": "fish",
    "title": "Cold smoked bream",
    "groupBloodNotAllowed": {
      "1": false,
      "2": false,
      "3": false,
      "4": false
    }
  },{
    "_id": {
      "$oid": "5d51694902b2373622ff5b8d"
    },
    "weight": 100,
    "calories": 281,
    "category": "fish",
    "title": "Pollock in batter",
    "groupBloodNotAllowed": {
      "1": false,
      "2": false,
      "3": false,
      "4": false
    }
  },{
    "_id": {
      "$oid": "5d51694902b2373622ff590d"
    },
    "weight": 100,
    "calories": 232,
    "category": "meat",
    "title": "Lamb ham",
    "groupBloodNotAllowed": {
      "1": false,
      "2": true,
      "3": false,
      "4": true
    }
  },{
    "_id": {
      "$oid": "5d51694902b2373622ff5f16"
    },
    "weight": 100,
    "calories": 38,
    "category": "soft drinks",
    "title": "Pepsi",
    "groupBloodNotAllowed": {
      "1": false,
      "2": false,
      "3": false,
      "4": false
    }
  },{
    "_id": {
      "$oid": "5d51694802b2373622ff56c1"
    },
    "weight": 100,
    "calories": 432,
    "category": "flour",
    "title": "Cedar flour",
    "groupBloodNotAllowed": {
      "1": true,
      "2": false,
      "3": false,
      "4": false
    }
  },{
    "_id": {
      "$oid": "5d51694902b2373622ff5b65"
    },
    "weight": 100,
    "calories": 112,
    "category": "fish",
    "title": "langoustine",
    "groupBloodNotAllowed": {
      "1": false,
      "2": false,
      "3": false,
      "4": false
    }
  },{
    "_id": {
      "$oid": "5d51694902b2373622ff5726"
    },
    "weight": 100,
    "calories": 282,
    "category": "dairy",
    "title": "Cheese Artis for pan frying and grilling 45%",
    "groupBloodNotAllowed": {
      "1": true,
      "2": true,
      "3": false,
      "4": false
    }
  },{
    "_id": {
      "$oid": "5d51694902b2373622ff5d34"
    },
    "weight": 100,
    "calories": 298,
    "category": "vegetables and herbs",
    "title": "dried potatoes",
    "groupBloodNotAllowed": {
      "1": false,
      "2": false,
      "3": false,
      "4": false
    }
  }
]

const categories = [
  "alcoholic drinks",
  "berries",
  "cereals",
  "dairy",
  "dried fruits",
  "eggs",
  "fish",
  "flour",
  "fruits",
  "meat",
  "mushrooms",
  "nuts",
  "oils and fats",
  "poppy",
  "sausage",
  "seeds",
  "sesame",
  "soft drinks",
  "vegetables and herbs"
]
// const products = [];

function ProductPage() {
  return <PageContainer className='container'>
    <Container>
    <Title title='Products' />
    <ProductsFilters categories={categories} />
    </Container>
    {products.length !== 0 ? <ProductsList products={products} /> : <NotFoundProduct />}
  </PageContainer>;
}

export default ProductPage;
