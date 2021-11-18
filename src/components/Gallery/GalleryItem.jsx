import React from 'react';

const GalleryItem = ({ img }) => {
  return (
    <div className="box">
      <img src={img} alt="" />
    </div>
  )
}

export default GalleryItem
