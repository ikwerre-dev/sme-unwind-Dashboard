import { useState } from 'react'
import Header from './components/Header'
import MainSection from './components/Mainsection'
import AboutSection from './components/AboutSection'
import CountdownSection from './components/CountdownSection'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <MainSection />
      <CountdownSection />
      <AboutSection />
    </>
  )
}

export default App
