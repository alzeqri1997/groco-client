import React from 'react';
import { Link } from 'react-router-dom';


const Heading = ({ name, title }) => {
  return (
    <div>
      <div class="heading">
        <h1>{title}</h1>
        <p>
          <Link to="/home"> Home {'>>'}</Link> {name}
        </p>
      </div>
    </div>
  )
}

export default Heading
