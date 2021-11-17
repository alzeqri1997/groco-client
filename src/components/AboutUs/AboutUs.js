import React from 'react';
import aboutImg from '../../images/about-img.jpg';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section className="about">
      <div className="image">
        <img src={aboutImg} alt="" />
      </div>

      <div className="content">
        <span>welcome to our shop</span>
        <h3>fresh and organic groceries</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel
          sequi nostrum quae nobis non quaerat nisi voluptatibus recusandae
          reprehenderit tempore eligendi, eum quibusdam perferendis dicta,
          incidunt dolores nemo ex.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
          cumque molestiae blanditiis deleniti aspernatur, ab tempora quisquam
          sapiente commodi hic.
        </p>
        <Link to="/" className="btn">
          read more
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
