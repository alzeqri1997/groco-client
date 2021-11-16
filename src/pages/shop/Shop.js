import React from 'react';

import Categories from '../../components/Categories/Categories';
import Products from '../../components/Products/Products';
import Heading from '../../components/Heading';

const Shop = () => {
  return (
    <>
      <Heading name="shop" />
      <Categories />
      <Products />
    </>
  );
};

export default Shop;
