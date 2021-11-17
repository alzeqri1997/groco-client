import React from 'react';

import ClientItem from './ClientItem';

import pic1 from '../../images/pic-1.png';
import pic2 from '../../images/pic-2.png';
import pic3 from '../../images/pic-3.png';
import pic4 from '../../images/pic-4.png';
import pic5 from '../../images/pic-5.png';
import pic6 from '../../images/pic-6.png';

const Client = () => {
  const clientData = [
    {
      img: pic1,
      name: 'john deo',
      title: 'happy client',
      comment:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem molestiae expedita culpa officiis harum impedit vel! Odit saepe similique vero!',
    },
    {
      img: pic2,
      name: 'john deo',
      title: 'happy client',
      comment:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem molestiae expedita culpa officiis harum impedit vel! Odit saepe similique vero!',
    },
    {
      img: pic3,
      name: 'john deo',
      title: 'happy client',
      comment:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem molestiae expedita culpa officiis harum impedit vel! Odit saepe similique vero!',
    },
    {
      img: pic4,
      name: 'john deo',
      title: 'happy client',
      comment:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem molestiae expedita culpa officiis harum impedit vel! Odit saepe similique vero!',
    },
    {
      img: pic5,
      name: 'john deo',
      title: 'happy client',
      comment:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem molestiae expedita culpa officiis harum impedit vel! Odit saepe similique vero!',
    },
    {
      img: pic6,
      name: 'john deo',
      title: 'happy client',
      comment:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem molestiae expedita culpa officiis harum impedit vel! Odit saepe similique vero!',
    },
  ];
  return (
    <section className="review">
      {clientData.map((client, index) => (
        <ClientItem {...client} key={index} />
      ))}
    </section>
  );
};

export default Client;
