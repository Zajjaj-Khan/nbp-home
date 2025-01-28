import React from 'react'
import './BackgroundTheme.scss'
function BackgroundTheme({ children }) {
    return (
        <div className="container">
            <div className="overlay"></div>
            <div className='content'>
                {children}
            </div>
        </div >
    )
}

export default BackgroundTheme