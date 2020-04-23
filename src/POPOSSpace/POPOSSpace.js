// src/Project.js

import React from 'react';
import { Link } from 'react-router-dom';
import './POPOSSpace.css';

function POPOSSpace(props) {
  const { name, image, address, hours, id } = props
  return (
    <div>
      <Link to={`/details/${id}`}>
        <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
      </Link>
      <h1>
        <Link to={`/details/${id}`}>
          {name}
        </Link>
      </h1>
      <h1>{name}</h1>
      <h2>{hours}</h2>
      <div>{address}</div>
    </div>

  )
}

export default POPOSSpace
