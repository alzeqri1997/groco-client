import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>quick links</h3>
          <Link to="home">
            <FontAwesomeIcon icon={faArrowRight} /> home
          </Link>
          <Link to="shop">
            <FontAwesomeIcon icon={faArrowRight} /> shop
          </Link>
          <Link to="about">
            <FontAwesomeIcon icon={faArrowRight} /> about
          </Link>
          <Link to="review">
            <FontAwesomeIcon icon={faArrowRight} /> review
          </Link>
          <Link to="blog">
            <FontAwesomeIcon icon={faArrowRight} /> blog
          </Link>
          <Link to="contact">
            <FontAwesomeIcon icon={faArrowRight} /> contact
          </Link>
        </div>

        <div className="box">
          <h3>extra links</h3>
          <Link to="/">
            <FontAwesomeIcon icon={faArrowRight} /> my order
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faArrowRight} /> my favorite
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faArrowRight} /> my wishlist
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faArrowRight} /> my account
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faArrowRight} /> terms or use
          </Link>
        </div>

        <div className="box">
          <h3>follow us</h3>
          <Link to="/">
            <i className="fab fa-facebook-f"></i> facebook
          </Link>
          <Link to="/">
            <i className="fab fa-twitter"></i> twitter
          </Link>
          <Link to="/">
            <i className="fab fa-instagram"></i> instagram
          </Link>
          <Link to="/">
            <i className="fab fa-linkedin"></i> linkedin
          </Link>
          <Link to="/">
            <i className="fab fa-pinterest"></i> pinterest
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
