import React from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Features from './Components/Features';
import About from './Components/About';
import FAQ from './Components/Faqdata';
import Connect from './Components/Connect';
import Footer from './Components/Footer';
import Chooseus from './Components/Chooseus';
import Testoo from './Components/Testoo';
import Card from './Components/Cards';
import Cardss from './Components/Cardss';


const App = () => {
  return (
    <main className='relative'>

      <Navbar />
      <Hero />
      <Card />
      <Cardss />
      <Features />
      <About />
      <Chooseus />
      <Testoo />
      <FAQ />
      <Connect />
      <Footer />

    </main>
  )
}

export default App