import React from 'react'

const ClientItem = ({ img, name, title, comment }) => {
  return (
    <div class="box">
      <div class="user">
        <img src={img} alt="" />
        <div class="info">
          <h3>{name}</h3>
          <span>{title}</span>
        </div>
      </div>
      <p>{comment}</p>
    </div>
  )
}

export default ClientItem
