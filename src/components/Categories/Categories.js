import React from 'react';

import cat1 from '../../images/cat-1.png';
import cat2 from '../../images/cat-2.png';
import cat3 from '../../images/cat-3.png';
import cat4 from '../../images/cat-4.png';
import cat5 from '../../images/cat-5.png';

import Category from './Category';

export default function Categories() {
  const categoriesData = [
    {
      img: cat1,
      title: 'fresh fruits',
      type: 'fruit',
    },
    {
      img: cat2,
      title: 'vegetables',
      type: 'vegetable',
    },
    {
      img: cat3,
      title: 'organic spices',
      type: 'organic',
    },
    {
      img: cat4,
      title: 'fresh meat',
      type: 'meat',
    },
    {
      img: cat5,
      title: 'organic wheat',
      type: 'wheat',
    },
  ];
  return (
    <section class="category">
      <h1 class="title">
        our <span>category</span>
      </h1>

      <div class="box-container">
        {categoriesData.map((cat, index) => (
          <Category {...cat} key={index} />
        ))}
      </div>
    </section>
  );
}
