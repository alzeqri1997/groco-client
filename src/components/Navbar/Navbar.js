import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faSearch,
  faShoppingCart,
  faUser,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../SearchBar';
import ShoppingCart from '../Shopping-cart/shopping-cart';
import Login from '../Login/login';
import './Navbar.scss';
const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleSearch = () => {
    setIsSearchOpen((prev) => !prev);
    setIsCartOpen(false);
    setIsLoginOpen(false);
  };

  const handleCart = () => {
    setIsCartOpen((prev) => !prev);
    setIsSearchOpen(false);
    setIsLoginOpen(false);
  };

  const handleLogin = () => {
    setIsLoginOpen((prev) => !prev);
    setIsCartOpen(false);
    setIsSearchOpen(false);
  };

  return (
    <header className="header">
      <a href="home.html" className="logo">
        <Logo className="logo__img" /> groco
      </a>
      <nav className="navbar">
        <a href="home.html">home</a>
        <a href="shop.html">shop</a>
        <a href="about.html">about</a>
        <a href="review.html">review</a>
        <a href="blog.html">blog</a>
        <a href="contact.html">contact</a>
      </nav>

      <div className="icons">
        <FontAwesomeIcon icon={faBars} id="menu-btn" />
        <FontAwesomeIcon
          icon={faSearch}
          id="search-btn"
          onClick={handleSearch}
        />
        <FontAwesomeIcon
          icon={faShoppingCart}
          id="cart-btn"
          onClick={handleCart}
        />
        <FontAwesomeIcon icon={faUser} id="login-btn" onClick={handleLogin} />
      </div>

      <SearchBar isSearchOpen={isSearchOpen} />

      <ShoppingCart isCartOpen={isCartOpen} />

      <Login isLoginOpen={isLoginOpen} />
    </header>
  );
};

export default Navbar;
