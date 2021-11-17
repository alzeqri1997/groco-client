import React from 'react';
import InfoItem from './InfoItem';

import icon1 from '../../images/icon-1.png';
import icon2 from '../../images/icon-2.png';
import icon3 from '../../images/icon-3.png';

const Info = () => {
  const infoData = [
    {
      img: icon1,
      title: 'fast delivery',
      body: 'within 30 minutes',
    },
    {
      img: icon2,
      title: '24/7 available',
      body: 'call us anytime',
    },
    {
      img: icon3,
      title: 'easy payment',
      body: 'cash or credits',
    },
  ];
  return (
    <section className="info-container">
      {infoData.map((info, index) => (
        <InfoItem {...info} key={index} />
      ))}
    </section>
  );
};

export default Info;
