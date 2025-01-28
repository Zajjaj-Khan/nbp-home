import React from 'react'
import Cards from '../Card';
import { Grid2 } from '@mui/material';
import './Features.scss'
const DATA = [
  {
    "strategy": "NBP DOA",
    "title": "Digital Account Opening",
    "description": "Seamlessly open your digital account anytime, anywhere with our quick and hassle-free process.",
    "cagr": "12.5%",
    "duration": "Learn More",
  },
  {
    "strategy": "NBP RDA",
    "title": "Income Shield",
    "description": "Provides stable and reliable income through diversified investments.",
    "cagr": "6.8%",
    "duration": "Learn More",
  },
 
]
const Features = props => {
  return (
    <div className='featureContainer'>
      <h2>Featured Products </h2>
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