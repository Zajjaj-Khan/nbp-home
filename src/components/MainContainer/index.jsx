import { Grid2, Box } from '@mui/material';
import React from 'react';
import DigitalAccountOpening from '../DigitalAccountOpening';
import './index.scss'
import Features from '../Features';
function MainContainer({handleButtonClick,relativeBtnRef,onProductSelect}) {
  return (
    <div className='mainContainer'>
      <Grid2 size={{ sm:12,lg:12 }} className="headingGrid">
        <Box className='MainHeading' >
          <h2>
            Welcome to <br />
            <span style={{ color: '#29d33d', fontFamily:'kanit-Bold' }}>National Bank of Pakistan</span>
          </h2>
        </Box>
      </Grid2>
      <Grid2 size={{ sm:12 , lg:12 }}>
          <Features handleButtonClick={handleButtonClick} relativeBtnRef={relativeBtnRef} onProductSelect={onProductSelect}/>
      </Grid2>
      </div>
  )
}

export default MainContainer;