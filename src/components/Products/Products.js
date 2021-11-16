import React from 'react';

import prod1 from '../../images/product-1.jpg';
import prod2 from '../../images/product-2.jpg';
import prod3 from '../../images/product-3.jpg';
import prod4 from '../../images/product-4.jpg';
import prod5 from '../../images/product-5.jpg';
import prod6 from '../../images/product-6.jpg';
import prod7 from '../../images/product-7.jpg';
import prod8 from '../../images/product-8.jpg';

import { Link } from 'react-router-dom';

import Product from './Product';

const Products = () => {
  const productData = [
    {
      img: prod1,
      name: 'organic food',
      price: 18.99,
    },
    {
      img: prod2,
      name: 'organic food',
      price: 18.99,
    },
    {
      img: prod3,
      name: 'organic food',
      price: 18.99,
    },
    {
      img: prod4,
      name: 'organic food',
      price: 18.99,
    },
    {
      img: prod5,
      name: 'organic food',
      price: 18.99,
    },
    {
      img: prod6,
      name: 'organic food',
      price: 18.99,
    },
    {
      img: prod7,
      name: 'organic food',
      price: 18.99,
    },
    {
      img: prod8,
      name: 'organic food',
      price: 18.99,
    },
  ];
  return (
    <section class="products">
      <h1 class="title">
        our <span>products</span> <Link to="/">view all {'>>'}</Link>{' '}
      </h1>

      <div class="box-container">
        {productData.map((product, index) => (
          <Product {...product} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Products;
