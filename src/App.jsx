import { useState } from 'react'
import Header from './components/Header'
import MainSection from './components/Mainsection'
import AboutSection from './components/AboutSection'
import CountdownSection from './components/CountdownSection'
import BrandSection from './components/BrandSection'
import FeatureSection from './components/FeatureSection'
import EventSchedule from './components/EventSchedule'
import QASection from './components/QASection'
import CTASection from './components/CTASection'
import Footer from './components/FooterSection'
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
      <CTASection />
      <Footer />

    </>
  )
}

export default App
