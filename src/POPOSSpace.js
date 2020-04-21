// src/Project.js

import React from 'react'
import './POPOSSpace.css';

function POPOSSpace(props) {
  const { name, image, address, hours } = props
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}images/${image}`} alt="california"/>
      <h1>{name}</h1>
      <h2>{hours}</h2>
      <div>{address}</div>
    </div>
  )
}

export default POPOSSpace
