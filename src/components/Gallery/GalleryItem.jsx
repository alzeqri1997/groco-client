import React from 'react';
import { Link } from 'react-router-dom';

const GalleryItem = ({ img }) => {
  return (
    <div className="box">
      <img src={img} alt="" />
    </div>
  )
}

export default GalleryItem
