import React from 'react'

const InfoItem = ({ img, title, body }) => {
  return (
    <div>
      <div className="info">
        <img src={img} alt="" />
        <div className="content">
          <h3>{title}</h3>
          <span>{body}</span>
        </div>
      </div>
    </div>
  )
}

export default InfoItem
