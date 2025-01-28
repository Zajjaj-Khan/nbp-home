import React from 'react'
import NBPLogo from '../../assets/images/NBP_whiteLogo.webp'
import './index.scss'
function TopHeader() {
  return (
    <div className='top-header'>
      <div>
      <img src={NBPLogo} alt='NBP logo' title='NBP' height={'40px'} width={'250px'} />
      </div>
      <div>
      </div>
    </div>
  )
}

export default TopHeader;   