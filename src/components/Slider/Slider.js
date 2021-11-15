import React from 'react';

const Slider = ({ img, title, body, textBtn, active }) => {
  return (
    <div class={`slide ${active}`}>
      <div class="content">
        <span>{title}</span>
        <h3>{body}</h3>
        <a href="#" class="btn">
          {textBtn}
        </a>
      </div>
      <div class="image">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Slider;
