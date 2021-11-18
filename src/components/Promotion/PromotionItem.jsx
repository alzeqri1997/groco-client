import React from 'react';
import { Link } from 'react-router-dom';

const PromotionItem = ({ img, title, textBtn }) => {
  return (
    <div className="promotion-item">
      <img src={img} alt="fruits" />
      <div className="promotion-content">
        <h3>{title}</h3>
        <Link to="/shop">{textBtn}</Link>
      </div>
    </div>
  )
}

export default PromotionItem;