import { useState } from 'react'
import TopHeader from './components/TopHeader'
import './index.scss'
import BackgroundTheme from './components/BackgroundTheme'
import MainContainer from './components/MainContainer'

function App() {
  return (
    <>
    <BackgroundTheme>
      <TopHeader />
      <MainContainer />
    </BackgroundTheme>
    </>
  )
}

export default App
