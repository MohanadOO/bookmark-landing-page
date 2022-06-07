import Features from './components/Features Section/Features'
import Footer from './components/Footer'
import FrequentQuestions from './components/Frequent Questions Section/FrequentQuestions'
import Header from './components/Header'
import Nav from './components/Nav'
import React from 'react'
import ExtensionSection from './components/Extension Section/ExtensionSection'

function App() {
  return (
    <div className='font-rubik'>
      <Nav />
      <div className='m-6 md:mx-20'>
        <Header />
        <Features />
        <ExtensionSection />
        <FrequentQuestions />
      </div>
      <Footer />
    </div>
  )
}

export default App
