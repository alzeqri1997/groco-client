import React from 'react';

const Slider = ({ img, title, body, textBtn, active }) => {
  return (
    <div className={`slide ${active}`}>
      <div className="content">
        <span>{title}</span>
        <h3>{body}</h3>
        <a href="#" className="btn">
          {textBtn}
        </a>
      </div>
      <div className="image">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Slider;
