import React from 'react'
import './BackgroundTheme.scss'
import DigitalAccountOpening from '../DigitalAccountOpening'
function BackgroundTheme({ children }) {
    return (
        <div>
        <div className="container">
            <div className="overlay"></div>
            <div className='content'>
                {children}
            </div>
        </div >
        <div className='digitalAccount'>
            <DigitalAccountOpening />
        </div>
        </div>
    )
}

export default BackgroundTheme