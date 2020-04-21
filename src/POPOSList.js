// src/POPOSList.js

import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import './POPOSSpace.css';

function POPOSList() {
  return (
   <div className="POPOSList">
     <POPOSSpace
       name="50 California Street"
       address="50 California St."
       image="50-california-st.jpg"
     />
     <POPOSSpace
     name="100 Pine Street"
     address="100 Pine Street St."
     image="100-Pine.jpg"
     />
     <POPOSSpace
     name="101-california"
     address="101-california St"
     image="101-california.jpg"
     />
     <POPOSSpace
     name="roof garden"
     address="343 sansome roof garden"
     image="343-sansome-roof-garden.jpg"
     />
     <POPOSSpace
     name="street plaza"
     address="525 market street plaza"
     image="525-market-street-plaza.jpg"
     />
     <POPOSSpace
     name="555-california"
     address="555-california"
     image="555-california.jpg"
     />
   </div>
 )
}

export default POPOSList
