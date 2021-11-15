import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
} from '@fortawesome/free-solid-svg-icons';


const SearchBar = ({ isSearchOpen }) => {
  return (
    <form
      action=""
      className={`search-form ${isSearchOpen ? 'active' : ''}`}
    >
      <input type="search" placeholder="search here..." id="search-box" />
      <label htmlFor="search-box">
        <FontAwesomeIcon
          icon={faSearch}
        />
      </label>
    </form>
  )
}

export default SearchBar