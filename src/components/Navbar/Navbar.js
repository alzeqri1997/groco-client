import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faSearch,
  faShoppingCart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../SearchBar';
import ShoppingCart from '../Shopping-cart/shopping-cart';
import Login from '../Login/login';
const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isBarOpen, setIsBarOpen] = useState(false);

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

  const handleNavBar = () => {
    setIsBarOpen((prev) => !prev);
  };

  const handleBarOpen = () => {
    setIsBarOpen(false);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <Logo className="logo__img" /> groco
      </Link>
      <nav className={`navbar ${isBarOpen ? 'active' : ''}`}>
        <Link to="/home" onClick={handleBarOpen}>
          home
        </Link>
        <Link to="/shop" onClick={handleBarOpen}>
          shop
        </Link>
        <Link to="/about" onClick={handleBarOpen}>
          about
        </Link>
        <Link to="/review" onClick={handleBarOpen}>
          review
        </Link>
        <Link to="/blog" onClick={handleBarOpen}>
          blog
        </Link>
        <Link to="/contact" onClick={handleBarOpen}>
          contact
        </Link>
      </nav>

      <div className="icons">
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
      <FontAwesomeIcon icon={faBars} id="menu-btn" onClick={handleNavBar} />

      <SearchBar isSearchOpen={isSearchOpen} />

      <ShoppingCart isCartOpen={isCartOpen} />

      <Login isLoginOpen={isLoginOpen} />
    </header>
  );
};

export default Navbar;
