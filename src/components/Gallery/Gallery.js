import React from 'react';

import gal1 from '../../images/gallery-img-1.jpg';
import gal2 from '../../images/gallery-img-2.jpg';
import gal3 from '../../images/gallery-img-3.jpg';
import gal4 from '../../images/gallery-img-4.jpg';
import gal5 from '../../images/gallery-img-5.jpg';
import gal6 from '../../images/gallery-img-6.jpg';

import GalleryItem from './GalleryItem';

const Gallery = () => {
  const galleryData = [
    {
      img: gal1,
    },
    {
      img: gal2,
    },
    {
      img: gal3,
    },
    {
      img: gal4,
    },
    {
      img: gal5,
    },
    {
      img: gal6,
    },
  ];
  return (
    <section class="gallery">
      <h1 class="title">
        our <span>gallery</span>
      </h1>

      <div class="box-container">
        {galleryData.map((item, index) => (
          <GalleryItem img={item.img} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
