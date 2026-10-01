import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import FeaturedProject from './components/FeaturedProject'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import { BUSINESS, getWhatsAppCatalogUrl } from './business'

function App() {
  return (
    <div className="site-shell">
      <Header />

      <main>
        <Hero />
        <Services />
        <Gallery />
        <FeaturedProject />
        <Highlights />
        <WhyChooseUs />
        <ContactForm />
      </main>

      <Footer />

      <div className="mobile-action-bar" aria-label="Quick contact">
        <a href={BUSINESS.phoneHref}>Call <span>{BUSINESS.phoneDisplay}</span></a>
        <a href={getWhatsAppCatalogUrl()} target="_blank" rel="noopener noreferrer">WhatsApp catalog</a>
      </div>
      <a
        className="floating-whatsapp"
        href={getWhatsAppCatalogUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get the catalog on WhatsApp"
      >
        WhatsApp
      </a>
    </div>
  )
}

export default App
