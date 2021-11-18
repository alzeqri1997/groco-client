import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
} from '@fortawesome/free-solid-svg-icons';


const SearchBar = ({ isSearchOpen }) => {
  const inputRef = useRef();

  useEffect(() => {
    if (isSearchOpen) {
      inputRef.current.focus()
    }
  })
  return (
    <form
      action=""
      className={`search-form ${isSearchOpen ? 'active' : ''}`}
    >
      <input ref={inputRef} type="search" placeholder="search here..." id="search-box" />
      <label htmlFor="search-box">
        <FontAwesomeIcon
          icon={faSearch}
        />
      </label>
    </form>
  )
}

export default SearchBar