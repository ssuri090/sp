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
import CollectionPage from './components/CollectionPage'
import About from './components/About'
import SpecialtySolutions from './components/SpecialtySolutions'
import { Icon } from './components/common'
import { BUSINESS, getWhatsAppCatalogUrl } from './business'
import { COLLECTIONS } from './assets/siteImages'

function App() {
  const collectionSlug = window.location.pathname.replace(/\/$/, '').split('/')[2]
  const collection = COLLECTIONS.find((item) => item.slug === collectionSlug)

  return (
    <div className="site-shell">
      <Header />

      <main>
        {collection ? (
          <CollectionPage collection={collection} />
        ) : (
          <>
            <Hero />
            <Services />
            <Gallery />
            <FeaturedProject />
            <Highlights />
            <About />
            <SpecialtySolutions />
            <WhyChooseUs />
            <ContactForm />
          </>
        )}
      </main>

      <Footer />

      <div className="mobile-action-bar" aria-label="Quick contact">
        <a href={BUSINESS.phoneHref}>Call <span>{BUSINESS.phoneDisplay}</span></a>
        <a href={getWhatsAppCatalogUrl()} target="_blank" rel="noopener noreferrer">WhatsApp catalog</a>
        <a href={BUSINESS.instagramHref} target="_blank" rel="noopener noreferrer"><Icon name="instagram" className="h-4 w-4" /><span>Instagram</span></a>
      </div>
      <a
        className="floating-instagram"
        href={BUSINESS.instagramHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit S&P Elegant Blinds on Instagram"
      >
        <Icon name="instagram" className="h-4 w-4" />
        Instagram
      </a>
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
