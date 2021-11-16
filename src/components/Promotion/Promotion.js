import React from 'react';

import promo1 from '../../images/promo/promo1.jpg';
import promo2 from '../../images/promo/promo2.jpg';
import promo3 from '../../images/promo/promo3.jpg';
import promo4 from '../../images/promo/promo4.jpg';
import promo5 from '../../images/promo/promo5.jpg';
import promo6 from '../../images/promo/promo6.jpg';

import PromotionItem from './PromotionItem';

const Promotion = () => {
  // Dummy Data
  const promotionContent = [
    {
      img: promo1,
      title: 'JUICE',
      textBtn: 'SHOP NOW',
    },
    {
      img: promo2,
      title: 'MANGO',
      textBtn: 'SHOP NOW',
    },
    {
      img: promo3,
      title: 'GRAPES',
      textBtn: 'SHOP NOW',
    },
    {
      img: promo4,
      title: 'POTATO',
      textBtn: 'SHOP NOW',
    },
    {
      img: promo5,
      title: 'ORANGE',
      textBtn: 'SHOP NOW',
    },
    {
      img: promo6,
      title: 'PINEAPPLE',
      textBtn: 'SHOP NOW',
    },
  ];
  return (
    <section className="section promotion">
      <div className="promotion-title">
        <h2>Shop Collections</h2>
        <span>Select from the premium product and save plenty money</span>
      </div>

      <div className="promotion-layout container">
        {promotionContent.map((item) => (
          <PromotionItem {...item} />
        ))}
      </div>
    </section>
  );
};

export default Promotion;
