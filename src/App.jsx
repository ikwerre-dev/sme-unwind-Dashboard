import { useState } from 'react'
import Header from './components/Header'
import MainSection from './components/Mainsection'
import AboutSection from './components/AboutSection'
import CountdownSection from './components/CountdownSection'
import BrandSection from './components/BrandSection'
import FeatureSection from './components/FeatureSection'
import EventSchedule from './components/EventSchedule'
import QASection from './components/QASection'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <MainSection />
      <CountdownSection />
      <AboutSection />
      <BrandSection />
      <FeatureSection />
      <EventSchedule />
      <QASection />

    </>
  )
}

export default App
