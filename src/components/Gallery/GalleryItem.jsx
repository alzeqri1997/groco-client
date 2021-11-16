import React from 'react';
import { Link } from 'react-router-dom';

const GalleryItem = ({ img }) => {
  return (
    <div class="box">
      <img src={img} alt="" />
    </div>
  )
}

export default GalleryItem
