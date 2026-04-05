import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import FeaturedProject from './components/FeaturedProject'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="bg-page text-slate-900">
      <Header />
      
      <main>
        <Hero />
        <Highlights />
        <FeaturedProject />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <ContactForm />
      </main>

      <Footer />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-white shadow-premium transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
          aria-label="Scroll to top"
        >
          ^
        </button>
      )}
    </div>
  )
}

export default App
