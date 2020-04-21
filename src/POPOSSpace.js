// src/Project.js

import React from 'react'
import './POPOSSpace.css';

function POPOSSpace(props) {
  const { name, image, address } = props
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}images/${image}`} alt="california"/>
      <h1>{name}</h1>
      <div>{address}</div>
    </div>
  )
}

export default POPOSSpace
