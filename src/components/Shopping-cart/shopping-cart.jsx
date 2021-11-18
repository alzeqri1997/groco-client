import React from 'react';
import {
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Box from './Box';

import cart1 from '../../images/cart-1.jpg';
import cart2 from '../../images/cart-2.jpg';
import cart3 from '../../images/cart-3.jpg';



const ShoppingCart = ({ isCartOpen }) => {
  return (
    <div className={`shopping-cart ${isCartOpen ? 'active' : ''}`}>

      {
        [{ img: cart1 }, { img: cart2 }, { img: cart3 }].map((box, index) =>
          <Box img={box.img} icon={faTimes} key={index} />
        )
      }


      <h3 className="total">
        total : <span>56.97</span>
      </h3>
      <Link to="/" className="btn">
        checkout cart
      </Link>
    </div>
  )
}

export default ShoppingCart;