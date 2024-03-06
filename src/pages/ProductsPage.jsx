import React from 'react';

import { GlobalStyle } from 'components/GlobalStyle';

import {BasicModalWindow} from '../components/Modal/ProductsModal/BasicModalWindow'

function ProductPage() {
  return <div className='container'>ProductPage
    <GlobalStyle/>
    <BasicModalWindow/>
  </div>;
}

export default ProductPage;