import React from 'react'

const ClientItem = ({ img, name, title, comment }) => {
  return (
    <div className="box">
      <div className="user">
        <img src={img} alt="" />
        <div className="info">
          <h3>{name}</h3>
          <span>{title}</span>
        </div>
      </div>
      <p>{comment}</p>
    </div>
  )
}

export default ClientItem
