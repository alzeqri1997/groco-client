import React from 'react'

const PromotionItem = ({ img, title, textBtn }) => {
  return (
    <div className="promotion-item">
      <img src={img} alt="fruits" />
      <div className="promotion-content">
        <h3>{title}</h3>
        <a href="">{textBtn}</a>
      </div>
    </div>
  )
}

export default PromotionItem;