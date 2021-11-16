import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import homeImg1 from '../../images/home-img-1.png';
import homeImg2 from '../../images/home-img-2.png';
import homeImg3 from '../../images/home-img-3.png';

import Slider from './Slider';

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Dummy data
  const slideContent = [
    {
      img: homeImg1,
      title: 'fresh and organic',
      body: 'upto 50% off',
      textBtn: 'shop now',
    },
    {
      img: homeImg2,
      title: 'fresh and tasty',
      body: 'upto 70% off',
      textBtn: 'shop now',
    },
    {
      img: homeImg3,
      title: 'fresh and Wow!',
      body: 'upto 20% off',
      textBtn: 'shop now',
    },
  ];

  const length = slideContent.length;

  const nextSlide = () => {
    setActiveSlide(activeSlide === length - 1 ? 0 : activeSlide + 1);
  };

  const prevSlide = () => {
    setActiveSlide(activeSlide === 0 ? length - 1 : activeSlide - 1);
  };

  if (!Array.isArray(slideContent) || slideContent.length <= 0) {
    return null;
  }

  return (
    <>
      <section className="hero">
        <div className="slides-container">
          {slideContent.map((slide, index) => {
            console.log(index);
            return (
              <Slider
                img={slide.img}
                title={slide.title}
                body={slide.body}
                textBtn={slide.textBtn}
                key={index}
                active={index === activeSlide ? 'active' : ''}
              />
            );
          })}
        </div>
        <FontAwesomeIcon
          icon={faAngleRight}
          id="next-slide"
          onClick={nextSlide}
        />
        <FontAwesomeIcon
          icon={faAngleLeft}
          id="prev-slide"
          onClick={prevSlide}
        />
      </section>
    </>
  );
};

export default Carousel;
