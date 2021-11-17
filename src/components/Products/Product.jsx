import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faHeart,
  faEye,
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const Product = ({ img, name, price }) => {
  return (
    <div className="box">
      <div className="icons">
        <Link to="/">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>

        <Link to="/">
          <FontAwesomeIcon icon={faHeart} />
        </Link>

        <Link to="/">
          <FontAwesomeIcon icon={faEye} />
        </Link>
      </div>
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="content">
        <h3>{name}</h3>
        <div className="price">${price}</div>
        {/* <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
      </div> */}
      </div>
    </div>

  )
}

export default Product
