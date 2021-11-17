import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>quick links</h3>
          <a href="home.html">
            <FontAwesomeIcon icon={faArrowRight} /> home
          </a>
          <a href="shop.html">
            <FontAwesomeIcon icon={faArrowRight} /> shop
          </a>
          <a href="about.html">
            <FontAwesomeIcon icon={faArrowRight} /> about
          </a>
          <a href="review.html">
            <FontAwesomeIcon icon={faArrowRight} /> review
          </a>
          <a href="blog.html">
            <FontAwesomeIcon icon={faArrowRight} /> blog
          </a>
          <a href="contact.html">
            <FontAwesomeIcon icon={faArrowRight} /> contact
          </a>
        </div>

        <div className="box">
          <h3>extra links</h3>
          <a href="#">
            {' '}
            <FontAwesomeIcon icon={faArrowRight} /> my order
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faArrowRight} /> my favorite
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faArrowRight} /> my wishlist
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faArrowRight} /> my account
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faArrowRight} /> terms or use
          </a>
        </div>

        <div className="box">
          <h3>follow us</h3>
          <a href="#">
            <i className="fab fa-facebook-f"></i> facebook
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i> twitter
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i> instagram
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i> linkedin
          </a>
          <a href="#">
            <i className="fab fa-pinterest"></i> pinterest
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
