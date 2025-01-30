import React from 'react'
import './BackgroundTheme.scss'
import DigitalAccountOpening from '../DigitalAccountOpening'
import RoshanAccountOpening from '../RoshanAccountOpening'

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
            <RoshanAccountOpening />
        </div>
        </div>
    )
}

export default BackgroundTheme