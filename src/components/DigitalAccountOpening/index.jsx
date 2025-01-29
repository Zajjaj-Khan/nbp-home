import { Grid2 ,Typography} from '@mui/material';
import DigitalAccount from '../../assets/images/digital-account.jpg'
import React from 'react'

function index() {
  return (
    <div>
         <Grid2 container spacing={2} >
      <Grid2 size={{xs:6,sm:6,lg:6}} >
        <Typography variant="h4" fontWeight="bold" >
          Digital Account Opening
        </Typography>
      </Grid2>
      <Grid2 size={{xs:6,sm:6,lg:6}} >
        <img src={DigitalAccount} width={'100%'}  style={{borderTopLeftRadius:'100px', borderBottomLeftRadius:'100px'}}/>
      </Grid2>
    </Grid2>
    </div>
  )
}

export default index