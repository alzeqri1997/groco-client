import React from 'react';

import Heading from '../../components/Heading';
import AboutUs from '../../components/AboutUs/AboutUs';
import Gallery from '../../components/Gallery/Gallery';

const About = () => {
  return (
    <>
      <Heading name="about" />
      <AboutUs />
      <Gallery />
    </>
  );
};

export default About;
