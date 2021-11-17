import React from 'react'

const InfoItem = ({ img, title, body }) => {
  return (
    <div>
      <div class="info">
        <img src={img} alt="" />
        <div class="content">
          <h3>{title}</h3>
          <span>{body}</span>
        </div>
      </div>
    </div>
  )
}

export default InfoItem
