import React from 'react'
import { Container, Button } from './common'
import { getWhatsAppCatalogUrl } from '../business'
import { SITE_IMAGES } from '../assets/siteImages'

const Hero = () => {
  return (
    <section id="top" className="hero-section">
      <Container className="hero-layout">
        <div className="hero-copy">
          <h1 className="hero-title">Beautiful light, <em>made personal.</em></h1>
          <p className="hero-description">
            Custom blinds and shades for your home, with personal service from selection to installation.
          </p>
          <div className="hero-actions">
            <Button variant="primary" size="lg" href="#contact">Request a Consultation</Button>
            <a
              className="button button--whatsapp"
              href={getWhatsAppCatalogUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Request the Catalog on WhatsApp
            </a>
          </div>
          <p className="whatsapp-note">Opens WhatsApp. Press Send to request the catalog; we’ll reply with available styles and pricing.</p>
          <p className="hero-location">Based in Middletown, Delaware. See our service ZIP codes below.</p>
        </div>
        <figure className="hero-image-wrap">
          <img
            className="hero-image"
            src={SITE_IMAGES.hero.publicPath}
            srcSet={SITE_IMAGES.hero.srcSet}
            sizes={SITE_IMAGES.hero.sizes}
            alt={SITE_IMAGES.hero.alt}
            width={SITE_IMAGES.hero.width}
            height={SITE_IMAGES.hero.height}
            fetchpriority="high"
            loading="eager"
          />
        </figure>
      </Container>
    </section>
  )
}

export default Hero
