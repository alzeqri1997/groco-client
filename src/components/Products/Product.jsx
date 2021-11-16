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
    <div class="box">
      <div class="icons">
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
      <div class="image">
        <img src={img} alt="" />
      </div>
      <div class="content">
        <h3>{name}</h3>
        <div class="price">${price}</div>
        {/* <div class="stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
      </div> */}
      </div>
    </div>

  )
}

export default Product
