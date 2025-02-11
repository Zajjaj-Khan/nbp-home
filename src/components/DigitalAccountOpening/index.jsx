import { Grid2 ,Typography, Button} from '@mui/material';
import React from 'react';
import "react-lazy-load-image-component/src/effects/blur.css";
import { AiFillBank } from "react-icons/ai";

import './DigitalAccount.scss'
function index() {
  return (
    <div className='mainCotainer'>
           <div className='digital-account-container'>
         <Grid2 container spacing={2}  >
    
      <Grid2 size={{xs:6,sm:6,lg:6}} >
      <div className='digital-account-content'>
        <div className='digital-icon'>
        <AiFillBank size={60}/>
        </div>
        <Typography variant="h4" fontWeight="bold" className='heading' >
          Digital Account Opening
        </Typography>
        <Typography variant="body2" mb={2} className='description ' >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus magni omnis aliquid officia repudiandae a quos sapiente adipisci tempora. Eos, illo eius perspiciatis asperiores dolorum natus neque velit quis!
        </Typography>
        <Button className='btn'>Apply for Digital Account</Button>
        </div>
      </Grid2>
  
      <Grid2 size={{xs:6,sm:6,lg:6}} >
        <div className='digital-account-image'/>
      </Grid2>
    </Grid2>
    </div>
    </div>
  )
}

export default index