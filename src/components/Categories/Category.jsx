import React from 'react'
import { Link } from 'react-router-dom';

const Category = ({ img, title, type }) => {
  return (
    <Link to="/" className="box">
      <img src={img} alt={type} />
      <h3>{title}</h3>
    </Link>
  )
}

export default Category;
