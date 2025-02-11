import { Grid2 ,Typography, Button} from '@mui/material';
import React from 'react';
import "react-lazy-load-image-component/src/effects/blur.css";
import { GiWallet } from "react-icons/gi";
import './RoshanAcount.scss'
function index() {
  return (
    <div className='mainCotainer'>
           <div className='digital-account-container'>
         <Grid2 container spacing={2}  >
      <Grid2 size={{xs:6,sm:6,lg:6}} >
      <div className='roshan-account-content'>
         <div className='roshan-icon'>
                <GiWallet size={60} color={'#188749'}/>
                </div>
        <Typography variant="h4" fontWeight="bold" className='heading' >
          Roshan Digital Account Opening
        </Typography>
        <Typography variant="body2" mb={2} className='description ' >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus magni omnis aliquid officia repudiandae a quos sapiente adipisci tempora. Eos, illo eius perspiciatis asperiores dolorum natus neque velit quis!
        </Typography>
        <Button className='btn'>Apply for Roshan Digital Account</Button>
        </div>
      </Grid2>
      <Grid2 size={{xs:6,sm:6,lg:6}} >
        <div className='roshan-account-image'/>
      </Grid2>
    </Grid2>
    </div>
    </div>
  )
}

export default index