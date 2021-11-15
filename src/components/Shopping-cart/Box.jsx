import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Box = ({ img, icon }) => {
  return (
    <div className="box">
      <FontAwesomeIcon icon={icon} />
      <img src={img} alt="" />
      <div className="content">
        <h3>organic food</h3>
        <span className="quantity">1</span>
        <span className="multiply">x</span>
        <span className="price">$18.99</span>
      </div>
    </div>
  )
}

export default Box;