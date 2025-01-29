import React from 'react'
import Cards from '../Card';

import './Features.scss'
const DATA = [
  {
    "strategy": "NBP DOA",
    "title": "Digital Account Opening",
    "description": "Seamlessly open your digital account anytime, anywhere with our quick and hassle-free process.",
    "cagr": "Bank Anywhere, Anytime",
    "duration": "Learn More",
    "bgColor":"#188749",
    "color":'#ffffff',
    "btn":"#ffffff",
    "btnIcon":"black",
    "label":"#ffffff"

  },
  {
    "strategy": "NBP RDA",
    "title": "Roshan Digital Account",
    "description": " Open a Roshan Digital Account (RDA) Seamlessly from Abroad to Manage Your Finances in Pakistan.",
    "cagr": "Banking Without Borders",
    "duration": "Learn More",
    "bgColor":"#FFFFFF",
    "color":'#000',
    "btn":"#188749",
    "btnIcon":"white",
    "label":"#7B807D"

  },
 
]
const Features = props => {
  return (
    <div className='featureContainer'>
      <div className="featureGrid">
      {
        DATA.map((feature, index) => (
          <Cards key={index} feature={feature} />
        ))
      }
      
      </div>
   
    </div>
  )
}



export default Features;