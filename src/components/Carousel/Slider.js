import React from 'react';
import { Link } from 'react-router-dom';

const Slider = ({ img, title, body, textBtn, active }) => {
  return (
    <div className={`slide ${active}`}>
      <div className="content">
        <span>{title}</span>
        <h3>{body}</h3>
        <Link to="/shop" className="btn">
          {textBtn}
        </Link>
      </div>
      <div className="image">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Slider;
